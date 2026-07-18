import { useActionState, useEffect, useRef } from 'react'
import { Loader2, Send } from 'lucide-react'
import { CONTACT_FIELDS, contactSchema, type ContactField } from '../../lib/contact-schema'
import { EMAIL } from '../../data/socials'

type FormValues = Record<ContactField, string>

type FormState = {
  status: 'idle' | 'success' | 'error'
  fieldErrors: Partial<FormValues>
  formError: string | null
  values: FormValues
}

const EMPTY_VALUES: FormValues = { name: '', email: '', subject: '', message: '' }

const INITIAL_STATE: FormState = {
  status: 'idle',
  fieldErrors: {},
  formError: null,
  values: EMPTY_VALUES,
}

async function submitContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const values: FormValues = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    subject: String(formData.get('subject') ?? ''),
    message: String(formData.get('message') ?? ''),
  }
  const company = String(formData.get('company') ?? '')

  const parsed = contactSchema.safeParse(values)
  if (!parsed.success) {
    const fieldErrors: Partial<FormValues> = {}
    for (const issue of parsed.error.issues) {
      const field = issue.path[0] as ContactField
      fieldErrors[field] ??= issue.message
    }
    return { status: 'error', fieldErrors, formError: null, values }
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...parsed.data, company }),
    })
    const result: unknown = await response.json().catch(() => null)
    if (!response.ok) {
      const serverError =
        typeof result === 'object' && result !== null && 'error' in result
          ? String((result as { error: unknown }).error)
          : null
      return {
        status: 'error',
        fieldErrors: {},
        formError: serverError ?? `Something went wrong — or email me directly at ${EMAIL}.`,
        values,
      }
    }
    return { status: 'success', fieldErrors: {}, formError: null, values: EMPTY_VALUES }
  } catch {
    return {
      status: 'error',
      fieldErrors: {},
      formError: `Couldn’t reach the contact service — please email me directly at ${EMAIL}.`,
      values,
    }
  }
}

const INPUT_CLASS =
  'w-full border border-line bg-ink-2 px-4 py-3.5 text-sm text-ivory placeholder:text-fog/50 transition-colors duration-300 focus:border-gold/60 focus:outline-none aria-[invalid=true]:border-red-400/60'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} role="alert" className="mt-2 text-xs text-red-300">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, INITIAL_STATE)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.status !== 'error') return
    const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')
    firstInvalid?.focus()
  }, [state])

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center border border-gold/30 bg-ink-2 p-10"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
          Message sent <span aria-hidden="true">◆</span>
        </p>
        <h3 className="mt-4 font-display text-3xl font-semibold text-ivory">
          Thank you — talk soon<span className="text-gold">.</span>
        </h3>
        <p className="mt-4 leading-relaxed text-fog">
          Your message is on its way. I usually reply within a day or two.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">
      {CONTACT_FIELDS.map(field => {
        const label =
          field === 'name'
            ? 'Your Name'
            : field === 'email'
              ? 'Email Address'
              : field === 'subject'
                ? 'Subject'
                : 'Message'
        const errorId = `${field}-error`
        const hasError = Boolean(state.fieldErrors[field])
        const shared = {
          id: field,
          name: field,
          defaultValue: state.values[field],
          'aria-invalid': hasError || undefined,
          'aria-describedby': hasError ? errorId : undefined,
          className: INPUT_CLASS,
        } as const

        return (
          <div key={field}>
            <label
              htmlFor={field}
              className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-fog"
            >
              {label} <span className="text-gold">*</span>
            </label>
            {field === 'message' ? (
              <textarea {...shared} rows={6} placeholder="What are we building?" />
            ) : (
              <input
                {...shared}
                type={field === 'email' ? 'email' : 'text'}
                autoComplete={field === 'name' ? 'name' : field === 'email' ? 'email' : 'off'}
                placeholder={
                  field === 'name'
                    ? 'Juan dela Cruz'
                    : field === 'email'
                      ? 'you@example.com'
                      : 'Project inquiry, internship, hello…'
                }
              />
            )}
            <FieldError id={errorId} message={state.fieldErrors[field]} />
          </div>
        )
      })}

      {/* Honeypot — humans never see it, bots love it */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.formError && (
        <p role="alert" className="border border-red-400/40 bg-red-950/30 px-4 py-3 text-sm text-red-200">
          {state.formError}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="group mt-2 inline-flex w-fit cursor-pointer items-center gap-2 bg-gold px-7 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
