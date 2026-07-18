import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { testimonials } from '../../data/testimonials'

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()
  const testimonial = testimonials[index]
  const total = testimonials.length

  const goTo = (next: number) => setIndex((next + total) % total)

  return (
    <section aria-labelledby="testimonials-heading" className="container-x pb-24 md:pb-32">
      <SectionHeading
        index="03"
        eyebrow="Kind Words"
        title={
          <span id="testimonials-heading">
            People I&rsquo;ve <span className="italic text-gold">built with</span>
          </span>
        }
      />

      <Reveal delay={0.1}>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          className="relative mt-14 overflow-hidden rounded-2xl border border-line bg-ink-2 p-8 md:p-14"
        >
          <span
            aria-hidden="true"
            className="absolute -top-6 left-6 font-display text-9xl text-gold/15 select-none md:left-10"
          >
            &ldquo;
          </span>

          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={index}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -32 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <blockquote className="max-w-3xl font-display text-xl leading-snug text-ivory italic md:text-2xl">
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
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
            <p className="font-mono text-xs tracking-[0.2em] text-fog">
              {String(index + 1).padStart(2, '0')}{' '}
              <span className="text-gold" aria-hidden="true">
                /
              </span>{' '}
              {String(total).padStart(2, '0')}
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={() => goTo(index - 1)}
                className="flex h-11 w-11 cursor-pointer items-center justify-center border border-line text-fog transition-colors hover:border-gold/50 hover:text-gold"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={() => goTo(index + 1)}
                className="flex h-11 w-11 cursor-pointer items-center justify-center border border-line text-fog transition-colors hover:border-gold/50 hover:text-gold"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
