import { useCallback, useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { Lightbox } from '../ui/Lightbox'
import { certIssuers, certifications } from '../../data/certifications'

const ALL = 'All'

export function CertificatesGallery() {
  const [filter, setFilter] = useState<string>(ALL)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const visible =
    filter === ALL ? certifications : certifications.filter(cert => cert.issuer === filter)

  const filters = [ALL, ...certIssuers]

  const selectFilter = (next: string) => {
    setFilter(next)
    setLightboxIndex(null)
  }

  return (
    <section aria-labelledby="certs-heading" className="container-x pb-24 md:pb-32">
      <SectionHeading
        index="04"
        eyebrow={`Certifications — ${certifications.length} Earned`}
        title={
          <span id="certs-heading">
            Proof of <span className="italic text-gold">study</span>
          </span>
        }
      />

      <Reveal delay={0.05}>
        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter by issuer">
          {filters.map(issuer => {
            const count =
              issuer === ALL
                ? certifications.length
                : certifications.filter(cert => cert.issuer === issuer).length
            const isActive = filter === issuer
            return (
              <button
                key={issuer}
                type="button"
                aria-pressed={isActive}
                onClick={() => selectFilter(issuer)}
                className={`cursor-pointer border px-4 py-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive
                    ? 'border-gold bg-gold text-ink'
                    : 'border-line text-fog hover:border-gold/50 hover:text-gold'
                }`}
              >
                {issuer} <span aria-hidden="true">·</span> {count}
              </button>
            )
          })}
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((cert, index) => (
          <li key={cert.image}>
            <Reveal delay={Math.min(index, 5) * 0.05}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group w-full cursor-pointer text-left"
                aria-label={`View certificate: ${cert.title}`}
              >
                <div className="aspect-[4/3] overflow-hidden border border-line bg-ink-2 p-3 transition-colors duration-300 group-hover:border-gold/50">
                  <img
                    src={cert.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-ivory">{cert.title}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                  {cert.issuer} · {cert.year}
                </p>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      {lightboxIndex !== null && (
        <Lightbox
          items={visible.map(cert => ({
            src: cert.image,
            title: cert.title,
            subtitle: `${cert.issuer} · ${cert.year}`,
          }))}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
