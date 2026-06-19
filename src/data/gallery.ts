import type { GalleryImage } from '@/types';
import { photo, thumb } from '@/lib/images';

/**
 * Gallery items. `aspect` controls how tall the masonry cell renders.
 * Replace `id` values with the brand's own photography (see lib/images.ts).
 */
interface Seed {
  id: string;
  unsplash: string;
  category: GalleryImage['category'];
  aspect: GalleryImage['aspect'];
  alt: string;
  caption?: string;
}

const seeds: Seed[] = [
  { id: 'g01', unsplash: '1490481651871-ab68de25d43d', category: 'runway', aspect: 'portrait', alt: 'Model on the runway in a sculptural draped gown', caption: 'Lagos Runway · Look 04' },
  { id: 'g02', unsplash: '1539109136881-3be0616acf4b', category: 'traditional', aspect: 'portrait', alt: 'Hand-woven aso-oke ensemble with gold detailing', caption: 'Aso-Oke Reverie' },
  { id: 'g03', unsplash: '1515886657613-9f3515b0c78f', category: 'bridal', aspect: 'square', alt: 'Bridal portrait in a beaded ivory gown', caption: 'Gilded Vows' },
  { id: 'g04', unsplash: '1469334031218-e382a71b716b', category: 'casual', aspect: 'portrait', alt: 'Relaxed linen co-ord styled for the city', caption: 'Harmattan Ease' },
  { id: 'g05', unsplash: '1487412720507-e7ab37603c6f', category: 'corporate', aspect: 'landscape', alt: 'Tailored suiting photographed in studio', caption: 'Boardroom Noir' },
  { id: 'g06', unsplash: '1496747611176-843222e1e57c', category: 'runway', aspect: 'portrait', alt: 'Editorial look with architectural shoulders', caption: 'Lagos Runway · Look 11' },
  { id: 'g07', unsplash: '1485462537517-ee2b8c0d6f4f', category: 'bridal', aspect: 'portrait', alt: 'Bride in a structured lace train', caption: 'Gilded Vows' },
  { id: 'g08', unsplash: '1483985988355-763728e1935b', category: 'casual', aspect: 'square', alt: 'Soft tailoring with relaxed silhouette', caption: 'Harmattan Ease' },
  { id: 'g09', unsplash: '1502716119720-b23a93e5fe1b', category: 'custom', aspect: 'landscape', alt: 'Bespoke fitting in the atelier', caption: 'Atelier · Bespoke' },
  { id: 'g10', unsplash: '1529139574466-a303027c1d8b', category: 'corporate', aspect: 'portrait', alt: 'Tailored two-piece in charcoal wool', caption: 'Boardroom Noir' },
  { id: 'g11', unsplash: '1485231183945-fffde7cc051e', category: 'traditional', aspect: 'portrait', alt: 'Ceremonial gele and embroidered bodice', caption: 'Aso-Oke Reverie' },
  { id: 'g12', unsplash: '1492707892479-7bc8d5a4ee93', category: 'runway', aspect: 'square', alt: 'Runway detail of layered textiles', caption: 'Lagos Runway · Detail' },
  { id: 'g13', unsplash: '1524504388940-b1c1722653e1', category: 'bridal', aspect: 'portrait', alt: 'Bridal back detail with covered buttons', caption: 'Gilded Vows' },
  { id: 'g14', unsplash: '1554412933-514a83d2f3c8', category: 'casual', aspect: 'portrait', alt: 'Everyday silhouette in warm neutrals', caption: 'Harmattan Ease' },
  { id: 'g15', unsplash: '1488161628813-04466f872be2', category: 'corporate', aspect: 'square', alt: 'Sharp tailoring portrait', caption: 'Boardroom Noir' },
  { id: 'g16', unsplash: '1506634572416-48cdfe530110', category: 'custom', aspect: 'portrait', alt: 'Made-to-measure gown on the stand', caption: 'Atelier · Bespoke' },
  { id: 'g17', unsplash: '1469460340997-2f854421e72f', category: 'traditional', aspect: 'landscape', alt: 'Layered coral beads and woven fabric', caption: 'Aso-Oke Reverie' },
  { id: 'g18', unsplash: '1581044777550-4cfa60707c03', category: 'runway', aspect: 'portrait', alt: 'Finale gown moving down the runway', caption: 'Lagos Runway · Finale' },
  { id: 'g19', unsplash: '1495385794356-15371f348c31', category: 'casual', aspect: 'square', alt: 'Relaxed weekend tailoring', caption: 'Harmattan Ease' },
  { id: 'g20', unsplash: '1551488831-00ddcb6c6bd3', category: 'custom', aspect: 'portrait', alt: 'Bespoke embroidery close-up', caption: 'Atelier · Bespoke' },
  { id: 'g21', unsplash: '1542295669297-4d352b042bca', category: 'bridal', aspect: 'portrait', alt: 'Veil and gown styled for the ceremony', caption: 'Gilded Vows' },
  { id: 'g22', unsplash: '1507680434567-5739c80be1ac', category: 'corporate', aspect: 'landscape', alt: 'Power dressing in tailored separates', caption: 'Boardroom Noir' },
];

export const galleryImages: GalleryImage[] = seeds.map((s) => ({
  id: s.id,
  category: s.category,
  aspect: s.aspect,
  alt: s.alt,
  caption: s.caption,
  src: photo(s.unsplash, { w: s.aspect === 'landscape' ? 1100 : 800 }),
  thumb: thumb(s.unsplash),
}));
