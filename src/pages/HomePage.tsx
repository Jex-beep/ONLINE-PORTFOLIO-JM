import { Hero } from '../components/home/Hero'
import { FeaturedWorks } from '../components/home/FeaturedWorks'
import { ExpertiseSection } from '../components/home/ExpertiseSection'
import { TestimonialTeaser } from '../components/home/TestimonialTeaser'

export function HomePage() {
  return (
    <>
      <title>Julien Michael Punsalan — Full-Stack Developer</title>
      <meta
        name="description"
        content="Portfolio of Julien Michael Punsalan — full-stack developer from Pampanga, Philippines building web and mobile products with Angular, Vue, React, Node.js and Flutter."
      />
      <Hero />
      <FeaturedWorks />
      <ExpertiseSection />
      <TestimonialTeaser />
    </>
  )
}
