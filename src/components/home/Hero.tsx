import { Link } from 'react-router'
import { ArrowUpRight, MapPin } from 'lucide-react'
import BlurText from '../reactbits/BlurText'
import RotatingText from '../reactbits/RotatingText'
import CountUp from '../reactbits/CountUp'
import { Reveal } from '../ui/Reveal'

const ROLES = [
  'Full-Stack Developer',
  'Web Developer',
  'UI/UX Designer',
  'Flutter Developer',
  'QA Tester',
]

const STATS = [
  { value: 6, suffix: '', label: 'Projects Shipped' },
  { value: 19, suffix: '', label: 'Certifications Earned' },
  { value: 5, suffix: '+', label: 'Tech Stacks' },
  { value: 1, suffix: '', label: 'Client Delivered' },
] as const

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* Ambient gold glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 h-[28rem] w-[28rem] rounded-full bg-gold/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-48 h-[32rem] w-[32rem] rounded-full bg-gold/[0.05] blur-3xl"
      />

      <div className="container-x grid items-center gap-14 pt-32 pb-16 md:pt-44 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              <span aria-hidden="true">◆</span> Portfolio — Holy Angel University, BSIT
            </p>
          </Reveal>

          <h1 id="hero-heading" className="sr-only">
            Julien Michael Punsalan — Full-Stack Developer
          </h1>
          <div aria-hidden="true" className="mt-6">
            <BlurText
              text="Julien Michael"
              animateBy="words"
              direction="top"
              delay={140}
              className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ivory sm:text-6xl md:text-7xl xl:text-8xl"
            />
            <BlurText
              text="Punsalan"
              animateBy="words"
              direction="top"
              delay={260}
              className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-gold italic sm:text-6xl md:text-7xl xl:text-8xl"
            />
          </div>

          <Reveal delay={0.35}>
            <div className="mt-7 flex items-center gap-3 font-mono text-sm text-fog md:text-base">
              <span className="text-gold" aria-hidden="true">
                //
              </span>
              <RotatingText
                texts={[...ROLES]}
                rotationInterval={2800}
                staggerDuration={0.02}
                mainClassName="overflow-hidden text-ivory"
                splitLevelClassName="overflow-hidden"
              />
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="mt-6 max-w-xl leading-relaxed text-fog">
              I design and build web &amp; mobile products end to end — from Figma frames to
              production databases. Fourth-year BSIT student in Pampanga, shipping real projects
              for real users.
            </p>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-bright"
              >
                View Selected Works
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-line px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.65}>
            <p className="mt-8 flex items-center gap-2 font-mono text-xs text-fog/80">
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              Mabalacat, Pampanga, PH
              <span className="mx-2 text-gold" aria-hidden="true">
                ◆
              </span>
              Open to internships
            </p>
          </Reveal>
        </div>

        {/* Portrait — editorial arch frame */}
        <Reveal delay={0.3} className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-t-full rounded-b-2xl border border-gold/25"
            />
            <div className="relative overflow-hidden rounded-t-full rounded-b-xl border border-line bg-gradient-to-b from-ink-3 via-ink-2 to-ink">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-6 mx-auto h-3/4 w-3/4 rounded-full bg-gold/[0.08] blur-2xl"
              />
              <img
                src="/formaljm.png"
                alt="Julien Michael Punsalan, formal portrait"
                width={890}
                height={878}
                fetchPriority="high"
                className="relative z-10 w-full object-cover object-top"
              />
            </div>
          </div>
          <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
            Fig. 01 — The Developer
          </p>
        </Reveal>
      </div>

      {/* Stats strip */}
      <div className="container-x">
        <Reveal>
          <dl className="grid grid-cols-2 gap-y-10 border-y border-line py-10 sm:grid-cols-4">
            {STATS.map(stat => (
              <div key={stat.label} className="text-center sm:text-left">
                <dd className="font-display text-4xl font-semibold text-ivory md:text-5xl">
                  <CountUp to={stat.value} duration={1.6} />
                  <span className="text-gold">{stat.suffix}</span>
                </dd>
                <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
