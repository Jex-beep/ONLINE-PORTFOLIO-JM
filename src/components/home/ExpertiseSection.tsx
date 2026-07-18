import { Braces, Database, PenTool, Smartphone } from 'lucide-react'
import SpotlightCard from '../reactbits/SpotlightCard'
import LogoLoop from '../reactbits/LogoLoop'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const GOLD_SPOTLIGHT = 'rgba(198, 161, 91, 0.08)' as const

const EXPERTISE = [
  {
    icon: Braces,
    title: 'Frontend Development',
    blurb: 'Responsive, accessible interfaces built with modern frameworks and a designer’s eye.',
    skills: ['Angular', 'Vue.js', 'React', 'TypeScript', 'TailwindCSS'],
  },
  {
    icon: Database,
    title: 'Backend Development',
    blurb: 'APIs, auth and data layers that stay fast and reliable under real-world use.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    blurb: 'Cross-platform apps with native feel — one codebase, every pocket.',
    skills: ['Flutter', 'Dart', 'Android Studio'],
  },
  {
    icon: PenTool,
    title: 'UI/UX Design & QA',
    blurb: 'From wireframe to polished flow — designed in Figma, verified by testing.',
    skills: ['Figma', 'Canva', 'UI/UX Design', 'QA Testing'],
  },
] as const

const TECH_MARQUEE = [
  'Angular',
  'Vue.js',
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'Supabase',
  'Flutter',
  'Dart',
  'TailwindCSS',
  'Figma',
]

export function ExpertiseSection() {
  return (
    <section aria-labelledby="expertise-heading" className="container-x py-24 md:py-32">
      <SectionHeading
        index="02"
        eyebrow="What I Do"
        title={
          <span id="expertise-heading">
            Core <span className="italic text-gold">expertise</span>
          </span>
        }
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERTISE.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.08}>
            <SpotlightCard
              className="h-full !rounded-2xl !border-line !bg-ink-2 !p-7"
              spotlightColor={GOLD_SPOTLIGHT}
            >
              <div className="flex h-full flex-col gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                  <area.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-semibold text-ivory">{area.title}</h3>
                <p className="text-sm leading-relaxed text-fog">{area.blurb}</p>
                <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1.5 pt-2" aria-label="Skills">
                  {area.skills.map(skill => (
                    <li key={skill} className="font-mono text-[10px] tracking-[0.12em] text-fog/80">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16 border-y border-line py-6">
          <LogoLoop
            logos={TECH_MARQUEE.map(tech => ({
              node: (
                <span className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.3em] text-fog/70">
                  {tech}
                  <span className="text-gold/50" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ),
              title: tech,
            }))}
            speed={60}
            gap={40}
            logoHeight={16}
            fadeOut
            fadeOutColor="#0B0A08"
            ariaLabel="Technologies I work with"
          />
        </div>
      </Reveal>
    </section>
  )
}
