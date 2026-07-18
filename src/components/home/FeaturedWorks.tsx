import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import SpotlightCard from '../reactbits/SpotlightCard'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { featuredProjects } from '../../data/projects'

const GOLD_SPOTLIGHT = 'rgba(198, 161, 91, 0.10)' as const

export function FeaturedWorks() {
  return (
    <section aria-labelledby="featured-heading" className="container-x py-24 md:py-32">
      <SectionHeading
        index="01"
        eyebrow="Selected Works"
        title={
          <span id="featured-heading">
            Latest <span className="italic text-gold">projects</span>
          </span>
        }
        linkTo="/projects"
        linkLabel="All projects"
      />

      <div className="mt-14 flex flex-col gap-10">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <SpotlightCard
              className="group !rounded-2xl !border-line !bg-ink-2 !p-0"
              spotlightColor={GOLD_SPOTLIGHT}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="grid md:grid-cols-2"
                aria-label={`${project.name} — view case study`}
              >
                <div
                  className={`relative overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="aspect-[16/10] w-full">
                    <img
                      src={project.images[0]}
                      alt={`${project.name} interface screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink-2/60 to-transparent md:bg-gradient-to-r"
                  />
                </div>

                <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                    <span className="text-gold">0{index + 1}</span>
                    <span className="text-fog">
                      {project.category === 'freelance' ? 'Client Work' : 'Academic'}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
                    {project.name}
                  </h3>
                  <p className="leading-relaxed text-fog">{project.tagline}</p>
                  <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tech.map(tech => (
                      <li
                        key={tech}
                        className="border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-fog"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-gold">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
