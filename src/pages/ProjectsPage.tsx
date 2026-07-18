import { useState } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects, type ProjectCategory } from '../data/projects'

type Filter = 'all' | ProjectCategory

const FILTERS: readonly { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'academic', label: 'Academic' },
  { value: 'freelance', label: 'Client Work' },
]

export function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <>
      <title>Projects — Julien Michael Punsalan</title>
      <meta
        name="description"
        content="Six shipped projects by Julien Michael Punsalan — GrabMeYaya, MJ Quality Cars, IPONLY, CAMPASS, LOFU and the GT Garage client build. Angular, Vue, Flutter, Node.js and more."
      />
      <header className="container-x pt-32 md:pt-44">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          <span aria-hidden="true">◆</span> Selected Works
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ivory md:text-7xl">
          Built, shipped, <span className="italic text-gold">used.</span>
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-fog">
          Six products — marketplaces, dashboards, booking systems and mobile apps — each designed
          and built end to end, from first wireframe to production.
        </p>
      </header>

      <section aria-labelledby="projects-grid-heading" className="container-x pt-12 pb-24 md:pb-32">
        <h2 id="projects-grid-heading" className="sr-only">
          Project list
        </h2>
        <p aria-live="polite" className="sr-only">
          Showing {visible.length} of {projects.length} projects
        </p>
        <Reveal>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {FILTERS.map(option => {
              const count =
                option.value === 'all'
                  ? projects.length
                  : projects.filter(p => p.category === option.value).length
              const isActive = filter === option.value
              return (
                <button
                  key={option.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(option.value)}
                  className={`cursor-pointer border px-4 py-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                    isActive
                      ? 'border-gold bg-gold text-ink'
                      : 'border-line text-fog hover:border-gold/50 hover:text-gold'
                  }`}
                >
                  {option.label} <span aria-hidden="true">·</span> {count}
                </button>
              )
            })}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {visible.map((project, index) => (
            <li key={project.slug} className="h-full">
              <Reveal delay={Math.min(index, 3) * 0.07} className="h-full">
                <ProjectCard project={project} index={index} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
