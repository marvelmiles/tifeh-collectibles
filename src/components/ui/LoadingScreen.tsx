import { motion } from 'framer-motion';
import { EASE_EDITORIAL } from '@/lib/motion';
import { siteConfig } from '@/config/site';

/**
 * Full-screen brand intro. Rendered only on the first paint (see App).
 * The whole overlay slides away on exit via AnimatePresence.
 */
export function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-canvas"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: EASE_EDITORIAL }}
    >
      <div className="overflow-hidden">
        <motion.p
          className="eyebrow text-gold"
          initial={{ y: '120%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.7, ease: EASE_EDITORIAL }}
        >
          {siteConfig.locations}
        </motion.p>
      </div>

      <div className="mt-3 overflow-hidden">
        <motion.h1
          className="font-display text-4xl font-medium sm:text-6xl"
          initial={{ y: '120%' }}
          animate={{ y: '0%' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_EDITORIAL }}
        >
          {siteConfig.name}
        </motion.h1>
      </div>

      <motion.div
        className="mt-8 h-px bg-gold/50"
        initial={{ width: 0 }}
        animate={{ width: '180px' }}
        transition={{ duration: 1, delay: 0.3, ease: EASE_EDITORIAL }}
      />
    </motion.div>
  );
}
