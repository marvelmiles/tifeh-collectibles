import { useCallback, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/types';
import { categoryLabel } from '@/config/site';

interface LightboxProps {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  // Keyboard controls + scroll lock + focus management
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, [open, onClose, goPrev, goNext]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${index! + 1} of ${images.length}: ${current.alt}`}
          className="fixed inset-0 z-[90] flex flex-col bg-ink/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Top bar */}
          <div className="flex shrink-0 items-center justify-between px-5 py-4 text-canvas sm:px-8">
            <span className="font-sans text-xs uppercase tracking-wide text-canvas/70">
              {String(index! + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="grid h-10 w-10 place-items-center text-canvas transition-colors hover:text-gold focus-visible:outline-2"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Image stage */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-14 pb-4 sm:px-16">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 z-10 grid h-11 w-11 place-items-center text-canvas/80 transition-colors hover:text-gold sm:left-5"
            >
              <ChevronLeft className="h-7 w-7" aria-hidden="true" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.alt}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="max-h-full max-w-full object-contain"
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 z-10 grid h-11 w-11 place-items-center text-canvas/80 transition-colors hover:text-gold sm:right-5"
            >
              <ChevronRight className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>

          {/* Caption */}
          <div className="shrink-0 px-5 py-4 text-center sm:px-8">
            <p className="font-display text-lg italic text-canvas">{current.caption ?? current.alt}</p>
            <p className="eyebrow mt-1 text-gold">{categoryLabel(current.category)}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
