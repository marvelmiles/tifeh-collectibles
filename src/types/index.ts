/** The fashion categories used for gallery filtering and collections. */
export type CategorySlug =
  | 'corporate'
  | 'casual'
  | 'runway'
  | 'custom'
  | 'wideleg';

export interface Category {
  slug: CategorySlug;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  /** Lower-resolution variant of the same image, used as a blur-up source. */
  thumb: string;
  alt: string;
  category: CategorySlug;
  /** Display orientation used to size the masonry cell. */
  aspect: 'portrait' | 'square' | 'landscape';
  caption?: string;
}

export interface Collection {
  slug: string;
  title: string;
  category: CategorySlug;
  season: string;
  tagline: string;
  description: string;
  inspiration: string;
  cover: string;
  gallery: string[];
  /** Slugs of related collections shown at the foot of the detail page. */
  related: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  // role: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}