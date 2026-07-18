import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'

export function TestimonialTeaser() {
  const testimonial = testimonials[0]

  return (
    <section aria-labelledby="testimonial-heading" className="container-x pb-24 md:pb-32">
      <SectionHeading
        index="03"
        eyebrow="Kind Words"
        title={
          <span id="testimonial-heading">
            What people <span className="italic text-gold">say</span>
          </span>
        }
        linkTo="/about"
        linkLabel="More about me"
      />

      <Reveal delay={0.1}>
        <figure className="relative mt-14 border-l-2 border-gold/40 pl-8 md:pl-12">
          <span
            aria-hidden="true"
            className="absolute -top-10 left-6 font-display text-8xl text-gold/20 select-none md:left-10"
          >
            &ldquo;
          </span>
          <blockquote className="max-w-3xl font-display text-2xl leading-snug text-ivory italic md:text-3xl">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <img
              src={testimonial.photo}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-full border border-gold/30 object-cover grayscale"
            />
            <div>
              <p className="font-mono text-sm text-ivory">{testimonial.name}</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-fog">
                {testimonial.role}
              </p>
            </div>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  )
}
