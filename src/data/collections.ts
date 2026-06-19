import type { Collection } from '@/types';
import { photo } from '@/lib/images';

export const collections: Collection[] = [
  {
    slug: 'aso-oke-reverie',
    title: 'Aso-Oke Reverie',
    category: 'traditional',
    season: 'Heritage · 2024',
    tagline: 'Hand-woven cloth, reimagined for the present.',
    description:
      'A study in Yoruba weaving traditions brought into a contemporary silhouette. Each piece begins on the loom with master weavers, then is cut to move — fluid where ceremony once demanded stiffness, confident where it once asked for restraint.',
    inspiration:
      'The collection takes its cue from the textures of family heirlooms: the slubbed surface of hand-spun aso-oke, the weight of coral, the quiet authority of cloth that has been passed down. We wanted to honour that lineage without turning it into costume.',
    cover: photo('1539109136881-3be0616acf4b', { w: 1200 }),
    gallery: [
      photo('1485231183945-fffde7cc051e', { w: 900 }),
      photo('1469460340997-2f854421e72f', { w: 1100 }),
      photo('1539109136881-3be0616acf4b', { w: 900 }),
    ],
    related: ['gilded-vows', 'lagos-runway-24'],
  },
  {
    slug: 'gilded-vows',
    title: 'Gilded Vows',
    category: 'bridal',
    season: 'Bridal · 2024',
    tagline: 'For the walk that everyone remembers.',
    description:
      'Bridal pieces built around the body and the moment. Structured corsetry holds the line through the ceremony; hand-set beadwork catches the light through the celebration. Every gown is fitted across multiple appointments so it feels inevitable on the day.',
    inspiration:
      'We looked at the architecture of light — the way it falls across a cathedral aisle and across beaten gold. The beadwork follows that logic, densest where it will be photographed most.',
    cover: photo('1515886657613-9f3515b0c78f', { w: 1200 }),
    gallery: [
      photo('1485462537517-ee2b8c0d6f4f', { w: 900 }),
      photo('1524504388940-b1c1722653e1', { w: 900 }),
      photo('1542295669297-4d352b042bca', { w: 900 }),
    ],
    related: ['aso-oke-reverie', 'atelier-bespoke'],
  },
  {
    slug: 'boardroom-noir',
    title: 'Boardroom Noir',
    category: 'corporate',
    season: 'Tailoring · 2024',
    tagline: 'Authority, cut close.',
    description:
      'A tailoring capsule for people who lead. Clean shoulders, considered proportions and a restrained palette of charcoal, ink and bone. Engineered to read sharp in a meeting and effortless by evening.',
    inspiration:
      'Modernist interiors and the discipline of a well-set table. Nothing extra — every seam earns its place.',
    cover: photo('1529139574466-a303027c1d8b', { w: 1200 }),
    gallery: [
      photo('1487412720507-e7ab37603c6f', { w: 1100 }),
      photo('1488161628813-04466f872be2', { w: 900 }),
      photo('1507680434567-5739c80be1ac', { w: 1100 }),
    ],
    related: ['harmattan-ease', 'lagos-runway-24'],
  },
  {
    slug: 'harmattan-ease',
    title: 'Harmattan Ease',
    category: 'casual',
    season: 'Resort · 2024',
    tagline: 'Warm-weather tailoring that breathes.',
    description:
      'Soft tailoring in linen and washed cotton for the in-between hours. Relaxed co-ords, generous shirting and trousers that fall just right — designed for the warm, dry clarity of the harmattan season.',
    inspiration:
      'The pale, dust-softened light of December mornings, and the comfort of clothes you forget you are wearing.',
    cover: photo('1469334031218-e382a71b716b', { w: 1200 }),
    gallery: [
      photo('1483985988355-763728e1935b', { w: 900 }),
      photo('1554412933-514a83d2f3c8', { w: 900 }),
      photo('1495385794356-15371f348c31', { w: 900 }),
    ],
    related: ['boardroom-noir', 'aso-oke-reverie'],
  },
  {
    slug: 'lagos-runway-24',
    title: 'Lagos Runway ’24',
    category: 'runway',
    season: 'Runway · 2024',
    tagline: 'The collection in full voice.',
    description:
      'The runway edit — the boldest expressions of the house, shown under the lights. Sculptural volume, dramatic drape and a finale gown that gathered the season into a single silhouette.',
    inspiration:
      'Movement. Every look was cut to be seen walking, the fabric finishing the gesture the body begins.',
    cover: photo('1496747611176-843222e1e57c', { w: 1200 }),
    gallery: [
      photo('1490481651871-ab68de25d43d', { w: 900 }),
      photo('1492707892479-7bc8d5a4ee93', { w: 900 }),
      photo('1581044777550-4cfa60707c03', { w: 900 }),
    ],
    related: ['aso-oke-reverie', 'gilded-vows'],
  },
  {
    slug: 'atelier-bespoke',
    title: 'Atelier · Bespoke',
    category: 'custom',
    season: 'Made to measure',
    tagline: 'One client, one pattern, one piece.',
    description:
      'Our made-to-measure practice. It begins with a conversation and a sketch, moves through hand-cut toiles and fittings, and ends with a single garment built to one body and one occasion. Commissions are limited each season.',
    inspiration:
      'The client. Every bespoke project is its own brief — drawn from a story, a place, a memory worth wearing.',
    cover: photo('1502716119720-b23a93e5fe1b', { w: 1200 }),
    gallery: [
      photo('1506634572416-48cdfe530110', { w: 900 }),
      photo('1551488831-00ddcb6c6bd3', { w: 900 }),
      photo('1502716119720-b23a93e5fe1b', { w: 1100 }),
    ],
    related: ['gilded-vows', 'boardroom-noir'],
  },
];

export const featuredCollections = collections.filter((c) =>
  ['aso-oke-reverie', 'gilded-vows', 'boardroom-noir', 'lagos-runway-24'].includes(c.slug),
);

export const getCollection = (slug: string): Collection | undefined =>
  collections.find((c) => c.slug === slug);
