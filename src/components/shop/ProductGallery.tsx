import { useState, type ReactNode } from 'react';
import { Image } from '@/components/ui/Image';

interface ProductGalleryProps {
  images: readonly string[];
  alt: string;
  /** Badges and overlays positioned over the active image. */
  children?: ReactNode;
}

export function ProductGallery({ images, alt, children }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? images[0];
  const hasMultipleViews = images.length > 1;

  return (
    <div>
      <div className="relative overflow-hidden">
        <Image
          key={activeImage}
          src={activeImage}
          alt={alt}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="aspect-[3/4] w-full transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.06]"
        />

        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-600 group-hover:opacity-100" />

        {children}
      </div>

      {hasMultipleViews && (
        <ul className="flex gap-2 px-5 pt-4 sm:px-6">
          {images.map((source, index) => {
            const isActive = index === activeIndex;
            return (
              <li key={source} className="flex-1">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-label={`View ${index + 1} of ${images.length}`}
                  className={`block w-full transition-colors duration-400 ease-editorial ${
                    isActive
                      ? 'ring-1 ring-gold'
                      : 'opacity-60 ring-1 ring-sand hover:opacity-100 hover:ring-gold/50'
                  }`}
                >
                  <Image src={source} alt="" className="aspect-[3/4] w-full" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
