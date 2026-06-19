import { motion } from 'framer-motion';
import { maskReveal, stagger, inView } from '@/lib/motion';

interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  /** Stagger between words, in seconds. */
  stagger?: number;
}

/**
 * Splits text into words and reveals each from behind a mask. Used for the
 * large editorial headings. Whole phrase is exposed to assistive tech via the
 * single semantic element; the per-word spans are aria-hidden.
 */
export function TextReveal({
  text,
  className = '',
  as = 'h2',
  stagger: staggerAmount = 0.08,
}: TextRevealProps) {
  const Tag = motion[as];
  const words = text.split(' ');

  return (
    <Tag
      className={className}
      variants={stagger(staggerAmount)}
      initial="hidden"
      whileInView="visible"
      viewport={inView}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span variants={maskReveal} className="inline-block">
            {word}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
