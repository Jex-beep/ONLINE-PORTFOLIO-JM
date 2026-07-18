import TiltedCard from '../reactbits/TiltedCard'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const FACTS = [
  'BSIT — Holy Angel University',
  'Expected graduation: April 2027',
  "President's / Dean's Lister",
] as const

export function AboutIntro() {
  return (
    <section aria-labelledby="intro-heading" className="container-x pt-10 pb-24 md:pb-32">
      <SectionHeading
        index="01"
        eyebrow="Who I Am"
        title={
          <span id="intro-heading">
            Developer, designer, <span className="italic text-gold">student of the craft</span>
          </span>
        }
      />

      <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="font-display text-2xl leading-snug text-ivory italic md:text-3xl">
              I&rsquo;m Julien — a fourth-year BSIT student from Pampanga who fell in love with
              building things people actually use.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 leading-relaxed text-fog">
              My path started in year one with the basics — HTML, CSS and JavaScript — and the
              realization that a blank editor could turn into anything. Since then I&rsquo;ve grown
              from static pages into full products: marketplaces, dashboards, booking systems and
              mobile apps.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 leading-relaxed text-fog">
              I care about the full picture. I design in Figma before I code, I build backends
              I&rsquo;d trust with real data, and I test like a QA engineer because I&rsquo;ve been
              one. That end-to-end habit is what let me ship six projects — including client work —
              before graduating.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <ul className="mt-9 flex flex-col gap-3">
              {FACTS.map(fact => (
                <li
                  key={fact}
                  className="flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-fog uppercase"
                >
                  <span className="text-gold" aria-hidden="true">
                    ◆
                  </span>
                  {fact}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Photo collage */}
        <div>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rotate-[0.6deg]">
                <TiltedCard
                  imageSrc="/gallery1.jpg"
                  altText="Julien at university"
                  containerHeight="16rem"
                  containerWidth="100%"
                  imageHeight="16rem"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              </div>
              <div className="-rotate-[1.2deg]">
                <TiltedCard
                  imageSrc="/gallery2.jpg"
                  altText="Julien with classmates"
                  containerHeight="11rem"
                  containerWidth="100%"
                  imageHeight="11rem"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              </div>
              <div className="rotate-[1.2deg]">
                <TiltedCard
                  imageSrc="/gallery3.jpg"
                  altText="Julien working on a project"
                  containerHeight="11rem"
                  containerWidth="100%"
                  imageHeight="11rem"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
              Fig. 02 — Off the editor
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {['/gallery4.jpg', '/gallery5.jpg', '/gallery6.jpg'].map(src => (
                <div key={src} className="aspect-square overflow-hidden border border-line">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:scale-105 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
