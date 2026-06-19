import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, inView } from '@/lib/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds before the reveal begins. */
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span';
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
