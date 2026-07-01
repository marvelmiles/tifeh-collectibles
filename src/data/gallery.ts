import type { GalleryImage } from '@/types';

/**
 * Gallery items — pulled from /public/Images.
 */
interface Seed {
  id: string;
  file: string;
  category: GalleryImage['category'];
  aspect: GalleryImage['aspect'];
  alt: string;
  caption?: string;
}

const seeds: Seed[] = [
  { id: 'g01', file: 'bolu.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g02', file: 'boluuuu.jpeg', category: 'custom', aspect: 'portrait', alt: 'Bespoke suit', caption: 'Suit' },
  { id: 'g03', file: 'fav.jpeg', category: 'runway', aspect: 'portrait', alt: 'Two piece set', caption: 'Two Piece' },
  { id: 'g04', file: 'fav4.jpeg', category: 'runway', aspect: 'portrait', alt: 'Two piece set', caption: 'Two Piece' },
  { id: 'g05', file: 'fav5.jpeg', category: 'casual', aspect: 'portrait', alt: 'Straight leg pant styling', caption: 'Straight Leg Pant' },
  { id: 'g06', file: 'fav7.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g07', file: 'tifeh.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g08', file: 'tifeh5.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Corporate wear', caption: 'Boardroom Noir' },
  { id: 'g09', file: 'tifeh6.jpeg', category: 'wideleg', aspect: 'portrait', alt: 'Wide leg pants', caption: 'Wide Leg Pants' },
  { id: 'g10', file: 'tifeh7.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g11', file: 'tifeh8.jpeg', category: 'custom', aspect: 'portrait', alt: 'Bespoke suit', caption: 'Suit' },
  { id: 'g12', file: 'tifeh9.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g13', file: 'tifehh.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g14', file: 'bolu4.jpeg', category: 'casual', aspect: 'portrait', alt: 'Straight leg pant styling', caption: 'Straight Leg Pant' },
  { id: 'g15', file: 'bolu5.jpeg', category: 'wideleg', aspect: 'portrait', alt: 'Wide leg pants', caption: 'Wide Leg Pants' },
  { id: 'g16', file: 'bolu6.jpeg', category: 'casual', aspect: 'portrait', alt: 'Straight leg pant styling', caption: 'Straight Leg Pant' },
  { id: 'g17', file: 'bolu8.jpeg', category: 'runway', aspect: 'portrait', alt: 'Two piece set', caption: 'Two Piece' },
  { id: 'g18', file: 'suit4.jpeg', category: 'custom', aspect: 'portrait', alt: 'Bespoke suit', caption: 'Suit' },
  { id: 'g19', file: 'suit6.jpeg', category: 'custom', aspect: 'portrait', alt: 'Bespoke suit', caption: 'Suit' },
  { id: 'g20', file: 'twopiece.jpeg', category: 'runway', aspect: 'portrait', alt: 'Two piece set', caption: 'Two Piece' },
  { id: 'g21', file: 'twopiece4.jpeg', category: 'runway', aspect: 'portrait', alt: 'Two piece set', caption: 'Two Piece' },
  { id: 'g22', file: 'twopiece5.jpeg', category: 'runway', aspect: 'portrait', alt: 'Two piece set', caption: 'Two Piece' },
  { id: 'g23', file: 'straight.jpeg', category: 'casual', aspect: 'portrait', alt: 'Straight leg pant styling', caption: 'Straight Leg Pant' },
  { id: 'g24', file: 'wide.jpeg', category: 'wideleg', aspect: 'portrait', alt: 'Wide leg pants', caption: 'Wide Leg Pants' },
  { id: 'g25', file: 'wide4.jpeg', category: 'wideleg', aspect: 'portrait', alt: 'Wide leg pants', caption: 'Wide Leg Pants' },
  { id: 'g26', file: 'wide5.jpeg', category: 'wideleg', aspect: 'portrait', alt: 'Wide leg pants', caption: 'Wide Leg Pants' },
  { id: 'g27', file: 'gown7.jpeg', category: 'corporate', aspect: 'portrait', alt: 'Tailored gown', caption: 'Gown' },
  { id: 'g28', file: 'suit5.jpeg', category: 'custom', aspect: 'portrait', alt: 'Bespoke suit', caption: 'Suit' },
  { id: 'g29', file: 'straight4.jpeg', category: 'casual', aspect: 'portrait', alt: 'Straight leg pant styling', caption: 'Straight Leg Pant' },
  { id: 'g30', file: 'suit.jpeg', category: 'custom', aspect: 'portrait', alt: 'Bespoke suit', caption: 'Suit' },
];

export const galleryImages: GalleryImage[] = seeds.map((s) => ({
  id: s.id,
  category: s.category,
  aspect: s.aspect,
  alt: s.alt,
  caption: s.caption,
  src: `/Images/${s.file}`,
  thumb: `/Images/${s.file}`,
}));