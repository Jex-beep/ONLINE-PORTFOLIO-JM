import { useCallback, useState } from 'react'
import { Link, useParams } from 'react-router'
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'
import GlareHover from '../components/reactbits/GlareHover'
import { Reveal } from '../components/ui/Reveal'
import { Lightbox } from '../components/ui/Lightbox'
import { PlaceholderPage } from './PlaceholderPage'
import { projects } from '../data/projects'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const projectIndex = projects.findIndex(p => p.slug === slug)
  const project = projects[projectIndex]

  if (!project) {
    return (
      <PlaceholderPage
        index="404"
        eyebrow="Not Found"
        title="Case study not found"
        description="That project doesn't exist — but six real ones do, one page back."
      />
    )
  }

  const previous = projects[(projectIndex - 1 + projects.length) % projects.length]
  const next = projects[(projectIndex + 1) % projects.length]
  const isClientWork = project.category === 'freelance'

  const lightboxItems = project.images.map((src, i) => ({
    src,
    title: `${project.name} — screenshot ${i + 1}`,
    subtitle: project.tagline,
  }))

  return (
    <>
      <title>{`${project.name} — Julien Michael Punsalan`}</title>
      <meta name="description" content={`${project.name}: ${project.tagline}`} />

      <article key={project.slug} className="container-x pt-32 md:pt-40">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          All projects
        </Link>

        {/* Header */}
        <header className="mt-10">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
                isClientWork ? 'bg-gold text-ink' : 'border border-line text-fog'
              }`}
            >
              {isClientWork ? 'Client Work' : 'Academic'}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
              {project.role}
            </span>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center border border-line bg-ink-2 p-2.5">
              <img
                src={project.logo}
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
            <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-ivory sm:text-5xl md:text-7xl">
              {project.name}
              <span className="text-gold">.</span>
            </h1>
          </div>
          <p className="mt-6 max-w-2xl font-display text-xl leading-snug text-fog italic md:text-2xl">
            {project.tagline}
          </p>
        </header>

        {/* Hero screenshot */}
        <Reveal delay={0.1}>
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            aria-label={`View ${project.name} screenshots full size`}
            className="group relative mt-12 block w-full cursor-pointer"
          >
            <GlareHover
              width="100%"
              height="auto"
              background="transparent"
              borderRadius="1rem"
              borderColor="var(--color-line)"
              glareColor="#C6A15B"
              glareOpacity={0.18}
              transitionDuration={900}
              className="!border"
            >
              <div className="aspect-[16/10] w-full">
                <img
                  src={project.images[0]}
                  alt={`${project.name} main interface`}
                  fetchPriority="high"
                  className="h-full w-full rounded-2xl object-cover object-top"
                />
              </div>
            </GlareHover>
            <span className="absolute right-4 bottom-4 flex h-10 w-10 items-center justify-center border border-line bg-ink/80 text-fog backdrop-blur-sm transition-colors duration-300 group-hover:border-gold/50 group-hover:text-gold">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </button>
        </Reveal>

        {/* Meta strip */}
        <Reveal delay={0.15}>
          <dl className="mt-12 grid gap-8 border-y border-line py-8 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Role</dt>
              <dd className="mt-2 text-sm text-ivory">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Type</dt>
              <dd className="mt-2 text-sm text-ivory">
                {isClientWork ? 'Freelance client project' : 'Academic project'}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Stack</dt>
              <dd className="mt-2">
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tech.map(tech => (
                    <li
                      key={tech}
                      className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fog"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* The brief */}
        <section aria-labelledby="brief-heading" className="mt-16 md:mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.25em] text-gold">01</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
                The Brief
              </span>
            </div>
            <h2 id="brief-heading" className="mt-6 font-display text-3xl font-semibold text-ivory">
              Why it <span className="italic text-gold">exists</span>
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-fog">{project.goal}</p>
          </Reveal>
        </section>

        {/* Features */}
        <section aria-labelledby="features-heading" className="mt-16 md:mt-20">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.25em] text-gold">02</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
                Key Features
              </span>
            </div>
            <h2
              id="features-heading"
              className="mt-6 font-display text-3xl font-semibold text-ivory"
            >
              What it <span className="italic text-gold">does</span>
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <li key={feature}>
                <Reveal delay={i * 0.05} className="flex items-start gap-3 border-b border-line pb-5">
                  <span className="mt-0.5 text-gold" aria-hidden="true">
                    ◆
                  </span>
                  <span className="leading-relaxed text-ivory">{feature}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        {project.images.length > 1 && (
          <section aria-labelledby="gallery-heading" className="mt-16 md:mt-20">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs tracking-[0.25em] text-gold">03</span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
                  Gallery
                </span>
              </div>
              <h2
                id="gallery-heading"
                className="mt-6 font-display text-3xl font-semibold text-ivory"
              >
                In <span className="italic text-gold">frames</span>
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {project.images.slice(1).map((image, i) => (
                <li key={image}>
                  <Reveal delay={i * 0.06}>
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(i + 1)}
                      aria-label={`View ${project.name} screenshot ${i + 2} full size`}
                      className="group block w-full cursor-pointer overflow-hidden rounded-xl border border-line transition-colors duration-300 hover:border-gold/50"
                    >
                      <div className="aspect-[16/10] w-full">
                        <img
                          src={image}
                          alt={`${project.name} screenshot ${i + 2}`}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </button>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Prev / Next */}
        <nav
          aria-label="More case studies"
          className="mt-20 grid gap-6 border-t border-line py-12 sm:grid-cols-2 md:mt-28"
        >
          <Link to={`/projects/${previous.slug}`} className="group">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-3xl">
              {previous.name}
            </p>
          </Link>
          <Link to={`/projects/${next.slug}`} className="group text-right">
            <p className="flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              Next case study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-ivory transition-colors duration-300 group-hover:text-gold md:text-3xl">
              {next.name}
            </p>
          </Link>
        </nav>
      </article>

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  )
}
