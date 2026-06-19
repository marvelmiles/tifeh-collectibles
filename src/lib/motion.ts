import type { Variants, Easing } from 'framer-motion';

export const EASE_EDITORIAL: Easing = [0.16, 1, 0.3, 1];

/** Fade + rise, used for most scroll-triggered reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_EDITORIAL },
  },
};

/** Parent that staggers its children's reveals. */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Mask wipe used for hero text lines and image reveals. */
export const maskReveal: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: EASE_EDITORIAL },
  },
};

/** Standard viewport config — animate once when ~20% is in view. */
export const inView = { once: true, amount: 0.2 } as const;
