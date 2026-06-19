import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CategoryFilter, type Filter } from './CategoryFilter';
import { GalleryItem } from './GalleryItem';
import { Lightbox } from '@/components/ui/Lightbox';
import { galleryImages } from '@/data/gallery';
import { categories } from '@/config/site';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import type { CategorySlug } from '@/types';

const isValidCategory = (value: string | null): value is CategorySlug =>
  !!value && categories.some((c) => c.slug === value);

export function GalleryGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.get('category');
  const [active, setActive] = useState<Filter>(isValidCategory(initial) ? initial : 'all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Per-category counts for the filter labels.
  const counts = useMemo(() => {
    return galleryImages.reduce<Record<string, number>>((acc, img) => {
      acc[img.category] = (acc[img.category] ?? 0) + 1;
      return acc;
    }, {});
  }, []);

  const filtered = useMemo(
    () => (active === 'all' ? galleryImages : galleryImages.filter((i) => i.category === active)),
    [active],
  );

  const { count, sentinelRef, hasMore } = useInfiniteScroll({
    total: filtered.length,
    initial: 9,
    step: 6,
  });

  const visible = filtered.slice(0, count);

  const handleFilter = (filter: Filter) => {
    setActive(filter);
    setLightboxIndex(null);
    const next = new URLSearchParams(searchParams);
    if (filter === 'all') next.delete('category');
    else next.set('category', filter);
    setSearchParams(next, { replace: true });
  };

  return (
    <>
      <CategoryFilter active={active} onChange={handleFilter} counts={counts} />

      {/* Masonry via CSS columns */}
      <motion.div layout className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((image, i) => (
            <GalleryItem key={image.id} image={image} index={i} onOpen={setLightboxIndex} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Infinite-scroll sentinel */}
      {hasMore && (
        <div ref={sentinelRef} className="flex justify-center py-12" aria-hidden="true">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-sand border-t-gold" />
        </div>
      )}

      {!hasMore && filtered.length > 9 && (
        <p className="py-12 text-center text-sm text-muted">You’ve reached the end of this line.</p>
      )}

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
