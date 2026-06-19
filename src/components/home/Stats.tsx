import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/testimonials';
import { fadeUp, inView, stagger } from '@/lib/motion';

export function Stats() {
  return (
    <section aria-label="Tifeh Collectibles by the numbers" className="bg-ink text-canvas">
      <div className="container-page py-20 sm:py-24">
        <motion.dl
          className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center lg:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-5xl font-medium text-gold sm:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-3 block font-sans text-xs uppercase tracking-wide text-canvas/70">
                  {stat.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
