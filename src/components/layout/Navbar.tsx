import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Resume', to: '/resume' },
  { label: 'Contact', to: '/contact' },
] as const

function navLinkClass({ isActive }: { isActive: boolean }): string {
  const base =
    'font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer'
  return isActive ? `${base} text-gold` : `${base} text-fog hover:text-ivory`
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/75 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Julien Michael Punsalan — home"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/jmlogo.png"
            alt=""
            width={32}
            height={33}
            className="h-8 w-auto invert opacity-90"
          />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-ivory">
            JM&thinsp;·&thinsp;Punsalan
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(link => (
            <NavLink key={link.to} to={link.to} className={navLinkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden border border-gold/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-ink md:inline-flex"
        >
          Let&rsquo;s Talk
        </Link>

        <button
          type="button"
          className="cursor-pointer p-2 text-ivory md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen(open => !open)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-lg md:hidden"
        >
          {NAV_LINKS.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-display text-3xl ${isActive ? 'italic text-gold' : 'text-ivory'}`
              }
            >
              <span className="mr-3 font-mono text-xs text-gold">0{index + 1}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
