import type { PriceTier, Product, ProductCategory } from '@/types';

const STANDARD_SIZES = 'Size 4 - 12';
const EXTENDED_SIZES = 'Size 14 and above';
const ALL_SIZES = 'All sizes';

type ProductDraft = Omit<Product, 'priceTiers'>;

const sizeBandPricing = (standard: number, extended: number): readonly PriceTier[] => [
  { label: STANDARD_SIZES, price: standard },
  { label: EXTENDED_SIZES, price: extended },
];

const flatPricing = (price: number): readonly PriceTier[] => [{ label: ALL_SIZES, price }];

const image = (file: string): string => `/Images/${file}`;

const gallery = (...files: readonly string[]): readonly string[] => files.map(image);

const pricedAt = (
  tiers: readonly PriceTier[],
  drafts: readonly ProductDraft[],
): readonly Product[] => drafts.map((draft) => ({ ...draft, priceTiers: tiers }));

export const productCategories: readonly ProductCategory[] = [
  {
    slug: 'peplum-tops',
    label: 'Peplum Tops',
    tagline: 'Zip-front peplum with a contrast portrait collar and flared cuff.',
    products: pricedAt(sizeBandPricing(30_000, 33_000), [
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
    ]),
  },
  {
    slug: 'ruched-gowns',
    label: 'Ruched Gowns',
    tagline: 'Puff-sleeve midi gown, side-ruched with drawstring ties.',
    products: pricedAt(sizeBandPricing(26_000, 29_000), [
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
    ]),
  },
  {
    slug: 'corporate-gowns',
    label: 'Corporate Gowns',
    tagline: 'Two-tone yoke and button detail, tailored for the office.',
    products: pricedAt(sizeBandPricing(26_000, 29_000), [
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
    ]),
  },
  {
    slug: 'two-piece-sets',
    label: 'Two Piece Sets',
    tagline: 'Button-trim peplum top with a wide leg trouser, sold as a set.',
    products: pricedAt(sizeBandPricing(30_000, 35_000), [
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
    ]),
  },
  {
    slug: 'bell-sleeve-sets',
    label: 'Bell Sleeve Sets',
    tagline: 'Zip-front peplum jacket with a scarf neck tie and bell sleeves, cut with a straight leg trouser.',
    products: pricedAt(sizeBandPricing(30_000, 35_000), [
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
    ]),
  },
  {
    slug: 'bubu-kaftans',
    label: 'Bubu and Kaftans',
    tagline: 'Flowing bubu silhouettes in silk, cotton and printed kimono, cut generously so one size band fits every frame.',
    products: [
      {
        id: 'bubu-silk',
        name: 'Silk Bubu',
        colourway: 'White, black, beige, sky blue or peach',
        image: image('bubu.jpeg'),
        alt: 'White silk bubu with wide sleeves and a matching neck scarf',
        gallery: gallery('bubu4.jpeg', 'bubu5.jpeg', 'bubu6.jpeg'),
        priceTiers: flatPricing(25_000),
      },
      {
        id: 'bubu-cotton-stripe',
        name: 'Multicoloured Cotton Bubu',
        colourway: 'Pastel Multicolour',
        image: image('gownb.jpeg'),
        alt: 'Full length cotton bubu panelled in pastel pink, blue, green and yellow stripes',
        gallery: gallery('gownb4.jpeg', 'gownb5.jpeg', 'gownb6.jpeg', 'gownb7.jpeg'),
        priceTiers: flatPricing(35_000),
      },
      {
        id: 'bubu-kimono-set',
        name: 'Kimono Bubu and Trouser Set',
        colourway: 'Ivory Floral and Chocolate',
        description:
          'Bubu kimono and pant trouser, the perfect blend of elegance, comfort and statement style.',
        image: image('yellow.jpeg'),
        alt: 'Ivory and gold floral kimono bubu worn open over chocolate brown wide leg trousers',
        gallery: gallery(
          'yellow4.jpeg',
          'yellow5.jpeg',
          'yellow6.jpeg',
          'yellow7.jpeg',
          'yellow8.jpeg',
        ),
        priceTiers: [
          { label: 'Kimono bubu', price: 30_000 },
          { label: 'Trouser', price: 17_000 },
        ],
      },
    ],
  },
  {
    slug: 'statement-dresses',
    label: 'Statement Dresses',
    tagline: 'Free flowing gowns and shirt dresses that keep the drama without giving up the comfort.',
    products: [
      {
        id: 'dress-textured-off-shoulder',
        name: 'Off Shoulder Textured Gown',
        colourway: 'White, sky blue, navy blue, peach or wine',
        description:
          'Effortlessly stylish, beautifully crafted and made for the woman who loves to make an elegant statement. Because comfort should never mean compromising on style.',
        image: image('peach.jpeg'),
        alt: 'Peach textured off shoulder gown with short puff sleeves and a folded neckline',
        gallery: gallery(
          'peach4.jpeg',
          'peach5.jpeg',
          'peach6.jpeg',
          'peach7.jpeg',
          'peach8.jpeg',
        ),
        priceTiers: flatPricing(38_000),
      },
      {
        id: 'dress-organza-cape',
        name: 'Organza Cape Sleeve Gown',
        colourway: 'Emerald Green',
        description: 'Effortless. Elegant. Comfortable. Simply precious.',
        image: image('green.jpeg'),
        alt: 'Emerald green gown with a circle print centre panel and sheer organza cape sleeves',
        gallery: gallery(
          'green4.jpeg',
          'green5.jpeg',
          'green6.jpeg',
          'green7.jpeg',
          'green8.jpeg',
        ),
        priceTiers: flatPricing(25_000),
      },
      {
        id: 'dress-denim-stripe',
        name: 'Denim Detail Striped Gown',
        colourway: 'Cobalt and Denim',
        description:
          'A little touch of denim, and a whole lot of precious. Those denim pockets and sleeves are the chef’s kiss.',
        image: image('blue.jpeg'),
        alt: 'Cobalt and white striped gown with a contrast denim pocket and denim sleeve cuffs',
        gallery: gallery(
          'blue4.jpeg',
          'blue5.jpeg',
          'blue6.jpeg',
          'blue7.jpeg',
          'blue8.jpeg',
        ),
        priceTiers: flatPricing(30_000),
      },
      {
        id: 'dress-belted-shirt',
        name: 'Belted Shirt Dress',
        colourway: 'Orchid Tie Dye',
        description:
          'Free, bold and effortlessly elegant. Statement sleeves, a flattering back belt and that perfect flow, this one speaks for itself.',
        image: image('pink.jpeg'),
        alt: 'Orchid tie dye shirt dress with a collar, button front and gathered statement sleeves',
        gallery: gallery(
          'pink4.jpeg',
          'pink5.jpeg',
          'pink6.jpeg',
          'pink7.jpeg',
          'pink8.jpeg',
        ),
        priceTiers: flatPricing(18_000),
      },
    ],
  },
];
