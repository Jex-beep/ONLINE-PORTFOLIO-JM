import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import SpotlightCard from '../reactbits/SpotlightCard'
import type { Project } from '../../data/projects'

const GOLD_SPOTLIGHT = 'rgba(198, 161, 91, 0.10)' as const

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isClientWork = project.category === 'freelance'

  return (
    <SpotlightCard
      className="group h-full !rounded-2xl !border-line !bg-ink-2 !p-0"
      spotlightColor={GOLD_SPOTLIGHT}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="flex h-full flex-col"
        aria-label={`${project.name} — view case study`}
      >
        <div className="relative overflow-hidden">
          <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-b from-ink-3 to-ink-2">
            <div
              aria-hidden="true"
              className="absolute h-2/3 w-2/3 rounded-full bg-gold/[0.06] blur-2xl"
            />
            <img
              src={project.logo}
              alt=""
              loading="lazy"
              width={2000}
              height={2000}
              className="relative h-1/2 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <span
            className={`absolute top-4 left-4 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${
              isClientWork
                ? 'bg-gold text-ink'
                : 'border border-line bg-ink/70 text-fog backdrop-blur-sm'
            }`}
          >
            {isClientWork ? 'Client Work' : 'Academic'}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-7">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-gold">
            {String(index + 1).padStart(2, '0')}
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-ivory md:text-3xl">
            {project.name}
          </h3>
          <p className="text-sm leading-relaxed text-fog">{project.tagline}</p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Technologies used">
            {project.tech.map(tech => (
              <li
                key={tech}
                className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fog"
              >
                {tech}
              </li>
            ))}
          </ul>
          <span className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </SpotlightCard>
  )
}
