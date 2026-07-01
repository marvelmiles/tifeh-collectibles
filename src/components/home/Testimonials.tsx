import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/testimonials';
import { EASE_EDITORIAL } from '@/lib/motion';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const count = testimonials.length;

  const paginate = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + count) % count);
  };

  const current = testimonials[index];

  return (
    <section aria-labelledby="testimonials-heading" className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="In their words"
        title="The fittings room"
        align="center"
        className="mb-14"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span
          className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display text-[8rem] leading-none text-gold/15 sm:text-[10rem]"
          aria-hidden="true"
        >
          “
        </span>

        <div className="relative min-h-[14rem] sm:min-h-[12rem]" aria-live="polite">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
            >
              <blockquote>
                <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                  {current.quote}
                </p>
              </blockquote>
              <figcaption className="mt-7">
                <span className="block font-sans text-sm font-medium uppercase tracking-wide text-ink">
                  {current.name}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  i === index ? 'w-7 bg-gold' : 'w-1.5 bg-ink/25 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center border border-ink/20 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}