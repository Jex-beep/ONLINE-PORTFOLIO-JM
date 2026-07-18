import { AboutIntro } from '../components/about/AboutIntro'
import { JourneyTimeline } from '../components/about/JourneyTimeline'
import { TestimonialsCarousel } from '../components/about/TestimonialsCarousel'
import { CertificatesGallery } from '../components/about/CertificatesGallery'

export function AboutPage() {
  return (
    <>
      <title>About — Julien Michael Punsalan</title>
      <meta
        name="description"
        content="About Julien Michael Punsalan — fourth-year BSIT student at Holy Angel University, his four-year journey as a web developer, testimonials, and 19 professional certifications."
      />
      <header className="container-x pt-32 md:pt-44">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          <span aria-hidden="true">◆</span> About
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold tracking-tight text-ivory md:text-7xl">
          The story <span className="italic text-gold">so far.</span>
        </h1>
      </header>
      <AboutIntro />
      <JourneyTimeline />
      <TestimonialsCarousel />
      <CertificatesGallery />
    </>
  )
}
