import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { Image } from '@/components/ui/Image';
import { categoryLabel } from '@/config/site';
import type { GalleryImage } from '@/types';
import { fadeUp } from '@/lib/motion';

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
}

const aspectClass: Record<GalleryImage['aspect'], string> = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
};

export function GalleryItem({ image, index, onOpen }: GalleryItemProps) {
  return (
    <motion.figure
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="group mb-6 break-inside-avoid"
    >
      <button
        type="button"
        onClick={() => onOpen(index)}
        aria-label={`Open ${image.alt} in full screen`}
        className="relative block w-full overflow-hidden text-left focus-visible:outline-2"
      >
        <Image
          src={image.src}
          thumb={image.thumb}
          alt={image.alt}
          className={`w-full ${aspectClass[image.aspect]} transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.05]`}
        />

        {/* Gradient + caption on hover */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-2 place-items-center rounded-full bg-canvas/90 text-ink opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
          <Expand className="h-4 w-4" aria-hidden="true" />
        </span>

        <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-canvas opacity-0 transition-all duration-500 ease-editorial [text-shadow:0_1px_8px_rgb(0_0_0_/_0.55)] group-hover:translate-y-0 group-hover:opacity-100">
          <span className="eyebrow inline-block bg-ink/55 px-2 py-1 text-gold backdrop-blur-sm">
            {categoryLabel(image.category)}
          </span>
          {image.caption && <span className="mt-1 block font-display text-lg">{image.caption}</span>}
        </figcaption>
      </button>
    </motion.figure>
  );
}
