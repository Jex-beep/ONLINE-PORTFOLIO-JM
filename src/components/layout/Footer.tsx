import type { ComponentType } from 'react'
import { Link } from 'react-router'
import { Mail, Phone } from 'lucide-react'
import ShinyText from '../reactbits/ShinyText'
import { FacebookIcon, GithubIcon, LinkedinIcon } from '../ui/BrandIcons'
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_HREF, socials } from '../../data/socials'

const SOCIAL_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Facebook: FacebookIcon,
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      {/* Contact CTA band */}
      <div className="container-x py-20 md:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
          Available for internships &amp; freelance
        </p>
        <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-semibold text-ivory md:text-6xl">
          Let&rsquo;s build something <span className="italic text-gold">worth shipping.</span>
        </h2>
        <a href={`mailto:${EMAIL}`} className="mt-8 inline-block" aria-label={`Email ${EMAIL}`}>
          <ShinyText
            text={`${EMAIL} →`}
            className="font-mono text-base tracking-wide md:text-lg"
            color="#C6A15B"
            shineColor="#F2EEE6"
            speed={3}
          />
        </a>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-[0.2em] text-fog uppercase">
              © 2026 Julien Michael Punsalan
            </span>
            <span className="font-mono text-xs text-fog/70">{LOCATION}</span>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
            {['About', 'Projects', 'Resume', 'Contact'].map(label => (
              <Link
                key={label}
                to={`/${label.toLowerCase()}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-gold"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            {socials.map(social => {
              const Icon = SOCIAL_ICONS[social.label]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-fog transition-colors duration-300 hover:text-gold"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="text-fog transition-colors duration-300 hover:text-gold"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="text-fog transition-colors duration-300 hover:text-gold"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
