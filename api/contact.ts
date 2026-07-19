import type { VercelRequest, VercelResponse } from '@vercel/node'
import { contactSchema } from '../src/lib/contact-schema.js'

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const TO_EMAIL = 'jmppunsalan@gmail.com'
/** Resend's shared sender — replace with a verified domain sender later. */
const FROM_EMAIL = 'Portfolio Contact <onboarding@resend.dev>'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5

// Best-effort per-warm-instance limiter; real abuse control belongs at the edge.
const requestLog = new Map<string, number[]>()
const REQUEST_LOG_MAX_ENTRIES = 500

function pruneRequestLog(now: number): void {
  if (requestLog.size < REQUEST_LOG_MAX_ENTRIES) return
  for (const [ip, timestamps] of requestLog) {
    if (timestamps.every(t => now - t >= RATE_LIMIT_WINDOW_MS)) {
      requestLog.delete(ip)
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  pruneRequestLog(now)
  const recent = (requestLog.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent)
    return true
  }
  requestLog.set(ip, [...recent, now])
  return false
}

function clientIp(req: VercelRequest): string {
  // x-real-ip is set by Vercel's edge and not client-forgeable, unlike the
  // first entry of x-forwarded-for.
  const realIp = req.headers['x-real-ip']
  const value = Array.isArray(realIp) ? realIp[0] : realIp
  return value?.trim() || 'unknown'
}

function isCrossOrigin(req: VercelRequest): boolean {
  const origin = req.headers.origin
  if (!origin || typeof origin !== 'string') return false
  try {
    return new URL(origin).host !== req.headers.host
  } catch {
    return true
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  if (isCrossOrigin(req)) {
    return res.status(403).json({ success: false, error: 'Forbidden' })
  }

  if (isRateLimited(clientIp(req))) {
    return res.status(429).json({
      success: false,
      error: 'Too many messages — please wait a few minutes and try again.',
    })
  }

  const body: unknown = req.body

  // Honeypot: bots fill the hidden "company" field. Pretend success, send nothing.
  if (typeof body === 'object' && body !== null && 'company' in body) {
    const company = (body as Record<string, unknown>).company
    if (typeof company === 'string' && company.trim().length > 0) {
      return res.status(200).json({ success: true })
    }
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      error: 'Invalid input — please check the form and try again.',
    })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return res.status(500).json({
      success: false,
      error: 'The contact service is not configured yet.',
    })
  }

  const { name, email, subject, message } = parsed.data
  const safeSubject = subject.replace(/[\r\n]+/g, ' ')

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${safeSubject}`,
        text: `New message from the portfolio contact form\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error(`Resend responded ${response.status}: ${detail.slice(0, 500)}`)
      return res.status(502).json({
        success: false,
        error: 'Could not send the message right now — please try again later.',
      })
    }

    return res.status(200).json({ success: true })
  } catch (error: unknown) {
    console.error('Contact send failed:', error instanceof Error ? error.message : error)
    return res.status(502).json({
      success: false,
      error: 'Could not send the message right now — please try again later.',
    })
  }
}
