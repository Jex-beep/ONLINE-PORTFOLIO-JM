import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { journey } from '../../data/journey'

export function JourneyTimeline() {
  return (
    <section aria-labelledby="journey-heading" className="container-x pb-24 md:pb-32">
      <SectionHeading
        index="02"
        eyebrow="My Journey"
        title={
          <span id="journey-heading">
            Four years, <span className="italic text-gold">four chapters</span>
          </span>
        }
      />

      <ol className="relative mt-14 ml-3 border-l border-line">
        {journey.map((chapter, index) => (
          <li key={chapter.num} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute top-1 -left-[5px] h-[9px] w-[9px] rotate-45 border border-gold bg-ink"
            />
            <Reveal delay={index * 0.06}>
              <div className="grid gap-4 md:grid-cols-[150px_1fr] md:gap-10">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.25em] text-gold">
                    {chapter.years}
                  </p>
                  <p
                    aria-hidden="true"
                    className="mt-2 font-display text-5xl font-semibold text-ivory/10 md:text-6xl"
                  >
                    {chapter.num}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ivory md:text-3xl">
                    Year {index + 1} — <span className="italic text-gold">{chapter.title}</span>
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-fog">{chapter.story}</p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Milestones">
                    {chapter.milestones.map(milestone => (
                      <li
                        key={milestone}
                        className="border border-line px-3 py-1.5 font-mono text-[10px] tracking-[0.12em] text-fog uppercase"
                      >
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
