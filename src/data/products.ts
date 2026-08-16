import type { PriceTier, ProductCategory } from '@/types';

const STANDARD_SIZES = 'Size 4 - 12';
const EXTENDED_SIZES = 'Size 14 and above';

const priceTiers = (standard: number, extended: number): readonly PriceTier[] => [
  { sizes: STANDARD_SIZES, price: standard },
  { sizes: EXTENDED_SIZES, price: extended },
];

const image = (file: string): string => `/Images/${file}`;

export const productCategories: readonly ProductCategory[] = [
  {
    slug: 'peplum-tops',
    label: 'Peplum Tops',
    tagline: 'Zip-front peplum with a contrast portrait collar and flared cuff.',
    priceTiers: priceTiers(30_000, 33_000),
    products: [
      {
        id: 'top-chocolate',
        name: 'Portrait Collar Peplum Top',
        colourway: 'Chocolate and Tan',
        image: image('top4.jpeg'),
        alt: 'Chocolate brown peplum top with a tan portrait collar',
      },
      {
        id: 'top-lilac',
        name: 'Portrait Collar Peplum Top',
        colourway: 'Lilac and Violet',
        image: image('top5.jpeg'),
        alt: 'Lilac peplum top with a deep violet portrait collar',
      },
      {
        id: 'top-wine',
        name: 'Portrait Collar Peplum Top',
        colourway: 'Wine and Blush',
        image: image('top6.jpeg'),
        alt: 'Wine peplum top with a blush pink portrait collar',
      },
      {
        id: 'top-navy',
        name: 'Portrait Collar Peplum Top',
        colourway: 'Navy and Ivory',
        image: image('top7.jpeg'),
        alt: 'Navy peplum top with an ivory portrait collar',
      },
      {
        id: 'top-midnight',
        name: 'Portrait Collar Peplum Top',
        colourway: 'Midnight and Ivory',
        image: image('top8.jpeg'),
        alt: 'Midnight navy peplum top with a wide ivory portrait collar',
      },
    ],
  },
  {
    slug: 'ruched-gowns',
    label: 'Ruched Gowns',
    tagline: 'Puff-sleeve midi gown, side-ruched with drawstring ties.',
    priceTiers: priceTiers(26_000, 29_000),
    products: [
      {
        id: 'gown-wine',
        name: 'Side Ruched Midi Gown',
        colourway: 'Wine',
        image: image('gownp4.jpeg'),
        alt: 'Wine ruched midi gown with puff sleeves',
      },
      {
        id: 'gown-purple',
        name: 'Side Ruched Midi Gown',
        colourway: 'Imperial Purple',
        image: image('gownp5.jpeg'),
        alt: 'Purple ruched midi gown with puff sleeves',
      },
      {
        id: 'gown-royal-blue',
        name: 'Side Ruched Midi Gown',
        colourway: 'Royal Blue',
        image: image('gownp6.jpeg'),
        alt: 'Royal blue ruched midi gown with puff sleeves',
      },
      {
        id: 'gown-black',
        name: 'Side Ruched Midi Gown',
        colourway: 'Black',
        image: image('gownp7.jpeg'),
        alt: 'Black ruched midi gown with puff sleeves',
      },
      {
        id: 'gown-chocolate',
        name: 'Side Ruched Midi Gown',
        colourway: 'Chocolate',
        image: image('gownp8.jpeg'),
        alt: 'Chocolate brown ruched midi gown with puff sleeves',
      },
    ],
  },
  {
    slug: 'corporate-gowns',
    label: 'Corporate Gowns',
    tagline: 'Two-tone yoke and button detail, tailored for the office.',
    priceTiers: priceTiers(26_000, 29_000),
    products: [
      {
        id: 'corporate-purple',
        name: 'Two Tone Corporate Gown',
        colourway: 'Purple and Lilac',
        image: image('copg4.jpeg'),
        alt: 'Purple corporate midi gown with a lilac yoke',
      },
      {
        id: 'corporate-green',
        name: 'Two Tone Corporate Gown',
        colourway: 'Forest and Sage',
        image: image('copg5.jpeg'),
        alt: 'Forest green corporate midi gown with a sage yoke',
      },
      {
        id: 'corporate-blue',
        name: 'Two Tone Corporate Gown',
        colourway: 'Royal and Sky',
        image: image('copg6.jpeg'),
        alt: 'Royal blue corporate midi gown with a sky blue yoke',
      },
      {
        id: 'corporate-wine',
        name: 'Two Tone Corporate Gown',
        colourway: 'Wine and Blush',
        image: image('copg7.jpeg'),
        alt: 'Wine corporate midi gown with a blush yoke',
      },
      {
        id: 'corporate-black',
        name: 'Two Tone Corporate Gown',
        colourway: 'Black and Ivory',
        image: image('copg8.jpeg'),
        alt: 'Black corporate midi gown with an ivory yoke',
      },
    ],
  },
  {
    slug: 'two-piece-sets',
    label: 'Two Piece Sets',
    tagline: 'Button-trim peplum top with a wide leg trouser, sold as a set.',
    priceTiers: priceTiers(30_000, 35_000),
    products: [
      {
        id: 'set-sage',
        name: 'Pocket Detail Two Piece',
        colourway: 'Sage and Forest',
        image: image('twop4.jpeg'),
        alt: 'Sage green peplum top with forest green wide leg trousers',
      },
      {
        id: 'set-ivory',
        name: 'Pocket Detail Two Piece',
        colourway: 'Ivory and Navy',
        image: image('twop5.jpeg'),
        alt: 'Ivory peplum top with navy wide leg trousers',
      },
      {
        id: 'set-champagne',
        name: 'Pocket Detail Two Piece',
        colourway: 'Champagne and Chocolate',
        image: image('twop6.jpeg'),
        alt: 'Champagne peplum top with chocolate wide leg trousers',
      },
      {
        id: 'set-lilac',
        name: 'Pocket Detail Two Piece',
        colourway: 'Lilac and Plum',
        image: image('twop7.jpeg'),
        alt: 'Lilac peplum top with plum wide leg trousers',
      },
      {
        id: 'set-sky',
        name: 'Pocket Detail Two Piece',
        colourway: 'Sky and Navy',
        image: image('twop8.jpeg'),
        alt: 'Sky blue peplum top with navy wide leg trousers',
      },
    ],
  },
  {
    slug: 'bell-sleeve-sets',
    label: 'Bell Sleeve Sets',
    tagline: 'Zip-front peplum jacket with a scarf neck tie and bell sleeves, cut with a straight leg trouser.',
    priceTiers: priceTiers(30_000, 35_000),
    products: [
      {
        id: 'bell-fuchsia',
        name: 'Scarf Neck Bell Sleeve Set',
        colourway: 'Fuchsia',
        image: image('roundtwop4.jpeg'),
        alt: 'Fuchsia bell sleeve peplum jacket and trouser set with a scarf neck tie',
      },
      {
        id: 'bell-burgundy',
        name: 'Scarf Neck Bell Sleeve Set',
        colourway: 'Burgundy',
        image: image('roundtwop5.jpeg'),
        alt: 'Burgundy bell sleeve peplum jacket and trouser set with a scarf neck tie',
      },
      {
        id: 'bell-charcoal',
        name: 'Scarf Neck Bell Sleeve Set',
        colourway: 'Charcoal',
        image: image('roundtwop6.jpeg'),
        alt: 'Charcoal bell sleeve peplum jacket and trouser set with a scarf neck tie',
      },
      {
        id: 'bell-chocolate',
        name: 'Scarf Neck Bell Sleeve Set',
        colourway: 'Chocolate',
        image: image('roundtwop7.jpeg'),
        alt: 'Chocolate brown bell sleeve peplum jacket and trouser set with a scarf neck tie',
      },
      {
        id: 'bell-cream',
        name: 'Scarf Neck Bell Sleeve Set',
        colourway: 'Cream',
        image: image('roundtwop8.jpeg'),
        alt: 'Cream bell sleeve peplum jacket and trouser set with a scarf neck tie',
      },
      {
        id: 'bell-forest',
        name: 'Scarf Neck Bell Sleeve Set',
        colourway: 'Forest Green',
        image: image('roundtwop9.jpeg'),
        alt: 'Forest green bell sleeve peplum jacket and trouser set with a scarf neck tie',
      },
    ],
  },
];
