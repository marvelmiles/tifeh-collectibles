import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  /** Optional tiny blur-up source shown while the full image loads. */
  thumb?: string;
  className?: string;
  /** Eager-load for above-the-fold imagery (the hero). Defaults to lazy. */
  priority?: boolean;
  sizes?: string;
}

/**
 * Resilient image. Shows a shimmer while loading, fades the real image in,
 * and — if the source fails — swaps to an on-brand gradient so the layout
 * never breaks. All gallery/collection imagery flows through this.
 */
export function Image({
  src,
  alt,
  thumb,
  className = '',
  priority = false,
  sizes,
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <span className={`relative block overflow-hidden bg-cream ${className}`}>
      {/* Skeleton / blur-up layer */}
      {!loaded && !failed && (
        <span
          aria-hidden="true"
          className="absolute inset-0 img-skeleton"
          style={
            thumb
              ? {
                  backgroundImage: `url(${thumb})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(12px)',
                  transform: 'scale(1.1)',
                }
              : undefined
          }
        />
      )}

      {failed ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center bg-gradient-to-br from-cream via-beige/40 to-cream"
        >
          <span className="font-display text-3xl italic text-gold/60">T</span>
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-editorial ${
            loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          }`}
        />
      )}
    </span>
  );
}
