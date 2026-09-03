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

/** The ready-to-wear pieces currently available to buy. */
export type ProductCategorySlug =
  | 'peplum-tops'
  | 'ruched-gowns'
  | 'corporate-gowns'
  | 'two-piece-sets'
  | 'bell-sleeve-sets'
  | 'bubu-kaftans'
  | 'statement-dresses';

/**
 * One priced line on a product card. The label names what is being priced:
 * a size band for pieces sold by fit, or a component for pieces sold as a set.
 */
export interface PriceTier {
  label: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  colourway: string;
  image: string;
  alt: string;
  description?: string;
  /** Additional views of the same piece, shown as thumbnails beside the cover. */
  gallery?: readonly string[];
  priceTiers: readonly PriceTier[];
}

export interface ProductCategory {
  slug: ProductCategorySlug;
  label: string;
  tagline: string;
  products: readonly Product[];
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