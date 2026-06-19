import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE_EDITORIAL } from '@/lib/motion';

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      id="main"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: EASE_EDITORIAL }}
    >
      {children}
    </motion.main>
  );
}
