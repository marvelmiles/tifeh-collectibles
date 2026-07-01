import type { Collection } from '@/types';

export const collections: Collection[] = [
  {
    slug: 'boardroom-noir',
    title: 'Executive Elegance',
    category: 'corporate',
    season: 'Tailoring · 2025',
    tagline: 'Authority, cut close.',
    description: 'Designed for women who value confidence and style in the workplace, featuring a structured top and pants. Clean lines and a considered silhouette built to move from the boardroom to the evening without missing a beat.',
    inspiration: 'Corporate women with confidence.',
    cover: '/Images/tifeh4.jpeg',
    gallery: [
      '/Images/tifeh4.jpeg',
      '/Images/fav.jpeg',
      '/Images/fav4.jpeg',
    ],
    related: ['power-suiting', 'sophisticated-pants'],
  },
  {
    slug: 'harmattan-ease',
    title: 'Harmattan Ease',
    category: 'casual',
    season: 'Resort · 2024',
    tagline: 'Warm-weather tailoring that breathes.',
    description: 'Soft tailoring in linen and washed cotton for the in-between hours. Relaxed co-ords, generous shirting and trousers that fall just right — designed for the warm, dry clarity of the harmattan season.',
    inspiration: 'The pale, dust-softened light of December mornings, and the comfort of clothes you forget you are wearing.',
    cover: '/Images/straight.jpeg',
    gallery: [
      '/Images/fav7.jpeg',
      '/Images/bolu.jpeg',
      '/Images/straight.jpeg',
    ],
    related: ['sophisticated-pants', 'lagos-runway-24'],
  },
  {
    slug: 'lagos-runway-24',
    title: 'Lagos Runway \u201924',
    category: 'runway',
    season: 'Runway · 2024',
    tagline: 'The collection in full voice.',
    description: 'The runway edit — the boldest expressions of the house, shown under the lights. Sculptural volume, dramatic drape and a finale gown that gathered the season into a single silhouette.',
    inspiration: 'Movement. Every look was cut to be seen walking, the fabric finishing the gesture the body begins.',
    cover: '/Images/fav4.jpeg',
    gallery: [
      '/Images/tifeh6.jpeg',
      '/Images/tifeh7.jpeg',
      '/Images/tifeh8.jpeg',
    ],
    related: ['boardroom-noir', 'atelier-bespoke'],
  },
  {
    slug: 'atelier-bespoke',
    title: 'Atelier · Bespoke',
    category: 'custom',
    season: 'Made to measure',
    tagline: 'One client, one pattern, one piece.',
    description: 'Our made-to-measure practice. It begins with a conversation and a sketch, moves through hand-cut toiles and fittings, and ends with a single garment built to one body and one occasion. Commissions are limited each season.',
    inspiration: 'The client. Every bespoke project is its own brief — drawn from a story, a place, a memory worth wearing.',
    cover: '/Images/tifeh9.jpeg',
    gallery: [
      '/Images/tifehhh.jpeg',
      '/Images/tifehh.jpeg',
      '/Images/tifeh.jpeg',
    ],
    related: ['power-suiting', 'lagos-runway-24'],
  },
  {
    slug: 'sophisticated-pants',
    title: 'Sophisticated Pants',
    category: 'wideleg',
    season: 'Everyday · 2025',
    tagline: 'Stylish trousers for every occasion sophistication.',
    description: 'Comfortable yet polished trousers for work and casual wear.',
    inspiration: 'Ease without compromise — trousers built to move between a workday and a weekend.',
    cover: '/Images/wide.jpeg',
    gallery: [
      '/Images/wide4.jpeg',
      '/Images/wide5.jpeg',
      '/Images/straight.jpeg',
    ],
    related: ['harmattan-ease', 'power-suiting'],
  },
  {
    slug: 'power-suiting',
    title: 'Power Suiting',
    category: 'custom',
    season: 'Tailoring · 2025',
    tagline: 'Confidence, tailored.',
    description: 'Designed for women who value confidence and style in the workplace, featuring tailored blazers and pants.',
    inspiration: 'Corporate women with confidence.',
    cover: '/Images/suit.jpeg',
    gallery: [
      '/Images/suit4.jpeg',
      '/Images/suit5.jpeg',
      '/Images/suit6.jpeg',
    ],
    related: ['atelier-bespoke', 'boardroom-noir'],
  },
];

export const featuredCollections = collections.filter((c) =>
  ['boardroom-noir', 'lagos-runway-24', 'harmattan-ease', 'sophisticated-pants'].includes(c.slug),
);

export const getCollection = (slug: string): Collection | undefined =>
  collections.find((c) => c.slug === slug);