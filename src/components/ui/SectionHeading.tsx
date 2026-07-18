import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  linkTo?: string
  linkLabel?: string
}

/** Editorial section header: numbered mono eyebrow, hairline rule, serif title. */
export function SectionHeading({ index, eyebrow, title, linkTo, linkLabel }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.25em] text-gold">{index}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
          {eyebrow}
        </span>
      </div>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-3xl font-semibold text-ivory md:text-5xl">{title}</h2>
        {linkTo && linkLabel && (
          <Link
            to={linkTo}
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-bright"
          >
            {linkLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    </Reveal>
  )
}
