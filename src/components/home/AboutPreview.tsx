import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';

import { Reveal } from '@/components/ui/Reveal';
import { TextReveal } from '@/components/ui/TextReveal';

import { EASE_EDITORIAL } from '@/lib/motion';

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="container-page py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Image with parallax-style offset frame */}
        <Reveal className="relative lg:col-span-5">
          <div className="absolute -left-3 -top-3 h-full w-full border border-gold/40" aria-hidden="true" />
          <img
  src="/Images/tifeh7.jpeg"
  alt="The Tifeh atelier — a garment taking shape on the stand"
  className="relative aspect-[4/5] w-full object-cover"
/>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="eyebrow">The house</span>
          </Reveal>

          <TextReveal
            as="h2"
            text="Heritage, held to a higher standard."
            className="mt-5 text-display-md font-medium text-ink"
          />

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
             Precious executive wear began with a simple conviction: that the cloth and
              craft of our heritage deserve the same reverence as any couture house
              in Paris or Milan. We weave, cut and hand-finish each piece in our
              atelier — never rushed, never mass-made.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="font-display text-xl italic text-ink sm:text-2xl">
                “We don’t follow the season. We dress the woman who sets it.”
              </p>
            </blockquote>
          </Reveal>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE_EDITORIAL }}
          >
            <LinkButton to="/about" variant="ghost" withArrow className="px-0">
              Read our story
            </LinkButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
