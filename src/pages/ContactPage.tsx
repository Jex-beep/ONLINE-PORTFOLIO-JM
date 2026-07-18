import { lazy, Suspense } from 'react'
import { Loader2, Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, GithubIcon, LinkedinIcon } from '../components/ui/BrandIcons'
import { Reveal } from '../components/ui/Reveal'
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_HREF, socials } from '../data/socials'

const SOCIAL_ICONS = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
} as const

// Form (and its zod dependency) loads only when this page renders
const ContactForm = lazy(() =>
  import('../components/contact/ContactForm').then(module => ({ default: module.ContactForm })),
)

function FormLoading() {
  return (
    <div className="flex min-h-64 items-center justify-center border border-line bg-ink-2">
      <Loader2 className="h-6 w-6 animate-spin text-gold" aria-hidden="true" />
      <span className="sr-only">Loading contact form</span>
    </div>
  )
}

export function ContactPage() {
  return (
    <>
      <title>Contact — Julien Michael Punsalan</title>
      <meta
        name="description"
        content="Get in touch with Julien Michael Punsalan — full-stack developer from Pampanga, open to internships and freelance projects."
      />

      <header className="container-x pt-32 md:pt-44">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          <span aria-hidden="true">◆</span> Contact
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ivory md:text-7xl">
          Let&rsquo;s <span className="italic text-gold">talk.</span>
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-fog">
          Have a project in mind, an internship slot, or just want to say hello? The form goes
          straight to my inbox — or reach me directly through any channel below.
        </p>
      </header>

      <div className="container-x grid gap-14 pt-14 pb-24 md:pb-32 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Direct channels */}
        <Reveal>
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center gap-4 border border-line bg-ink-2 p-5 transition-colors duration-300 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                  Email
                </span>
                <span className="mt-1 block text-sm text-ivory transition-colors group-hover:text-gold">
                  {EMAIL}
                </span>
              </span>
            </a>

            <a
              href={PHONE_HREF}
              className="group flex items-center gap-4 border border-line bg-ink-2 p-5 transition-colors duration-300 hover:border-gold/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                  Phone
                </span>
                <span className="mt-1 block text-sm text-ivory transition-colors group-hover:text-gold">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 border border-line bg-ink-2 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/30 text-gold">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                  Based in
                </span>
                <span className="mt-1 block text-sm text-ivory">{LOCATION}</span>
              </span>
            </div>

            <div className="mt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
                Elsewhere
              </p>
              <div className="mt-4 flex gap-4">
                {socials.map(social => {
                  const Icon = SOCIAL_ICONS[social.label as keyof typeof SOCIAL_ICONS]
                  if (!Icon) return null
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center border border-line text-fog transition-colors duration-300 hover:border-gold/50 hover:text-gold"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            <p className="mt-4 flex items-center gap-3 font-mono text-xs text-fog">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold" />
              </span>
              Open to internships &amp; freelance work
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.12}>
          <Suspense fallback={<FormLoading />}>
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </>
  )
}
