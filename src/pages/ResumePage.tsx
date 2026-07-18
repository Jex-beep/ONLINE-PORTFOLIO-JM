import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { certifications } from '../data/certifications'
import { EMAIL, LOCATION, PHONE_DISPLAY, PHONE_HREF } from '../data/socials'
import {
  academicProjects,
  AWARDS,
  CAREER_OBJECTIVE,
  education,
  freelanceProjects,
  LANGUAGES,
  RESUME_PDF,
  skillGroups,
  type ResumeProject,
} from '../data/resume'

function SectionLabel({ id, children }: { id: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <h2 id={id} className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
        {children}
      </h2>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  )
}

function ProjectEntry({ project }: { project: ResumeProject }) {
  return (
    <article className="border-b border-line pb-6 last:border-b-0 last:pb-0">
      <h3 className="font-display text-xl font-semibold text-ivory">
        {project.slug ? (
          <Link
            to={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-2 transition-colors hover:text-gold"
          >
            {project.title}
            <ArrowUpRight
              className="no-print h-4 w-4 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        ) : (
          project.title
        )}
        <span className="font-display font-normal text-fog italic"> — {project.subtitle}</span>
      </h3>
      <ul className="mt-3 flex flex-col gap-2">
        {project.bullets.map(bullet => (
          <li key={bullet} className="flex items-start gap-3 text-sm leading-relaxed text-fog">
            <span className="mt-0.5 text-gold" aria-hidden="true">
              ◆
            </span>
            {bullet}
          </li>
        ))}
      </ul>
      {project.tools && (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-fog/90">
          Tools: {project.tools}
        </p>
      )}
    </article>
  )
}

const certYears = [...new Set(certifications.map(cert => cert.year))].sort((a, b) => b - a)

export function ResumePage() {
  return (
    <>
      <title>Resume — Julien Michael Punsalan</title>
      <meta
        name="description"
        content="Resume of Julien Michael Punsalan — BSIT student at Holy Angel University, full-stack developer with 19 certifications, academic and freelance project experience. Download as PDF."
      />

      <header className="resume-header container-x pt-32 md:pt-44">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          <span aria-hidden="true">◆</span> Resume
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ivory md:text-7xl">
          Julien Michael <span className="italic text-gold">Punsalan</span>
        </h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-fog">
          Full-Stack Developer
        </p>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <li>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-gold"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 font-mono text-xs text-fog transition-colors hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {EMAIL}
            </a>
          </li>
          <li className="flex items-center gap-2 font-mono text-xs text-fog">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {LOCATION}
          </li>
        </ul>

        <a
          href={RESUME_PDF}
          download
          className="no-print group mt-9 inline-flex items-center gap-2 bg-gold px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-bright"
        >
          <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          Download Resume (PDF)
        </a>
      </header>

      <div className="container-x grid gap-14 pt-16 pb-24 md:pb-32 lg:grid-cols-[minmax(250px,0.75fr)_1.75fr] lg:gap-12">
        {/* Sidebar */}
        <aside className="flex flex-col gap-12">
          <section aria-labelledby="education-heading">
            <SectionLabel id="education-heading">Education</SectionLabel>
            <h3 className="font-display text-lg font-semibold text-ivory">{education.school}</h3>
            <p className="mt-1 text-sm leading-relaxed text-fog">{education.degree}</p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-fog">
              {education.location}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-gold">
              {education.graduation}
            </p>
          </section>

          {skillGroups.map(group => {
            const headingId = `${group.label.toLowerCase().replace(/[^a-z]+/g, '-')}-heading`
            return (
            <section key={group.label} aria-labelledby={headingId}>
              <SectionLabel id={headingId}>{group.label}</SectionLabel>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <li
                    key={skill}
                    className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fog"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
            )
          })}

          <section aria-labelledby="languages-heading">
            <SectionLabel id="languages-heading">Languages</SectionLabel>
            <ul className="flex flex-col gap-2">
              {LANGUAGES.map(language => (
                <li key={language} className="flex items-center gap-3 text-sm text-fog">
                  <span className="text-gold" aria-hidden="true">
                    ◆
                  </span>
                  {language}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="reference-heading">
            <SectionLabel id="reference-heading">Reference</SectionLabel>
            <p className="text-sm leading-relaxed text-fog">Available upon request.</p>
          </section>
        </aside>

        {/* Main column */}
        <div className="flex flex-col gap-12">
          <section aria-labelledby="objective-heading">
            <SectionLabel id="objective-heading">Career Objective</SectionLabel>
            <p className="max-w-2xl font-display text-lg leading-relaxed text-ivory italic md:text-xl">
              {CAREER_OBJECTIVE}
            </p>
          </section>

          <section aria-labelledby="academic-projects-heading">
            <SectionLabel id="academic-projects-heading">Academic Projects</SectionLabel>
            <div className="flex flex-col gap-6">
              {academicProjects.map(project => (
                <ProjectEntry key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section aria-labelledby="freelance-projects-heading">
            <SectionLabel id="freelance-projects-heading">Freelance Projects</SectionLabel>
            <div className="flex flex-col gap-6">
              {freelanceProjects.map(project => (
                <ProjectEntry key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section aria-labelledby="awards-heading">
            <SectionLabel id="awards-heading">Awards &amp; Honors</SectionLabel>
            <ul className="flex flex-col gap-2">
              {AWARDS.map(award => (
                <li key={award} className="flex items-start gap-3 leading-relaxed text-ivory">
                  <span className="mt-0.5 text-gold" aria-hidden="true">
                    ★
                  </span>
                  {award}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="certifications-heading">
            <SectionLabel id="certifications-heading">
              Certifications — {certifications.length}
            </SectionLabel>
            <div className="flex flex-col gap-8">
              {certYears.map(year => (
                <div key={year} className="grid gap-3 sm:grid-cols-[80px_1fr]">
                  <h3 className="font-display text-2xl font-semibold text-gold">{year}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {certifications
                      .filter(cert => cert.year === year)
                      .map(cert => (
                        <li key={cert.image} className="border-b border-line pb-2.5 last:border-b-0">
                          <p className="text-sm text-ivory">{cert.title}</p>
                          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                            {cert.issuer}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-fog">
              Certificate images are viewable on the{' '}
              <Link to="/about" className="text-gold underline underline-offset-4 hover:text-gold-bright">
                About page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
