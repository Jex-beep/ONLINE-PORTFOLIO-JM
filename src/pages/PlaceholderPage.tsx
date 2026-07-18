import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

type PlaceholderPageProps = {
  index: string
  title: string
  description: string
  eyebrow?: string
}

/** Temporary page shell for routes whose stage has not shipped yet, and 404s. */
export function PlaceholderPage({
  index,
  title,
  description,
  eyebrow = 'Coming Soon',
}: PlaceholderPageProps) {
  return (
    <>
      <title>{`${title} — Julien Michael Punsalan`}</title>
      <section className="container-x flex min-h-[70vh] flex-col justify-center pt-32 pb-24">
        <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
          {index} <span aria-hidden="true">◆</span> {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-5xl font-semibold text-ivory md:text-7xl">
          {title}
          <span className="text-gold">.</span>
        </h1>
        <p className="mt-6 max-w-lg leading-relaxed text-fog">{description}</p>
        <Link
          to="/"
          className="group mt-10 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-bright"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to home
        </Link>
      </section>
    </>
  )
}
