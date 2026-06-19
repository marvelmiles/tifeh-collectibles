import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { Image } from '@/components/ui/Image';
import { siteConfig } from '@/config/site';
import { photo } from '@/lib/images';
import { EASE_EDITORIAL } from '@/lib/motion';

const HERO_IMG = photo('1490481651871-ab68de25d43d', { w: 1000, h: 1300 });
const HERO_THUMB = photo('1490481651871-ab68de25d43d', { w: 40 });

const line = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: '0%',
    transition: { duration: 0.9, delay: 0.15 * i + 0.2, ease: EASE_EDITORIAL },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20" aria-labelledby="hero-heading">
      <div className="container-page grid min-h-[88vh] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-0">
        {/* Headline column */}
        <div className="order-2 lg:order-1 lg:col-span-7">
          {/* Vertical eyebrow on large screens */}
          <div className="mb-6 flex items-center gap-3 lg:mb-8">
            <motion.span
              className="h-px w-10 bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_EDITORIAL }}
              style={{ transformOrigin: 'left' }}
            />
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Est. {siteConfig.locations}
            </motion.span>
          </div>

          <h1
            id="hero-heading"
            className="text-display-lg font-medium leading-[0.96] text-ink"
          >
            <span className="block">
              {['Adorned', 'in', 'heritage,'].map((w, i) => (
                <span key={w} className="inline-block overflow-hidden align-bottom">
                  <motion.span custom={i} variants={line} initial="hidden" animate="visible" className="inline-block">
                    {w}
                    {'\u00A0'}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block overflow-hidden align-bottom">
              <motion.span
                custom={3}
                variants={line}
                initial="hidden"
                animate="visible"
                className="inline-block italic text-gold"
              >
                cut for now.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-md text-base leading-relaxed text-muted sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: EASE_EDITORIAL }}
          >
            An African luxury house translating hand-woven tradition into couture
            that moves with the women and men who wear it.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7, ease: EASE_EDITORIAL }}
          >
            <LinkButton to="/gallery" variant="solid" withArrow>
              View the gallery
            </LinkButton>
            <LinkButton to="/contact" variant="outline">
              Book a fitting
            </LinkButton>
          </motion.div>
        </div>

        {/* Image column with mask reveal */}
        <div className="order-1 lg:order-2 lg:col-span-5">
          <motion.div
            className="relative"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE_EDITORIAL }}
          >
            <Image
              src={HERO_IMG}
              thumb={HERO_THUMB}
              alt="Tifeh Collectibles signature look — a sculptural draped gown"
              priority
              className="aspect-[4/5] w-full"
            />
            {/* Floating caption chip */}
            <motion.div
              className="absolute -bottom-4 -left-4 hidden bg-canvas px-5 py-4 shadow-lg shadow-black/5 sm:block lg:-left-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="eyebrow text-gold">Featured</p>
              <p className="mt-1 font-display text-lg text-ink">Lagos Runway ’24</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[0.65rem] uppercase tracking-eyebrow text-muted">Scroll</span>
        <motion.span
          className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
