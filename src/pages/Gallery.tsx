import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';
import { Reveal } from '@/components/ui/Reveal';
import { TextReveal } from '@/components/ui/TextReveal';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { siteConfig } from '@/config/site';

export default function Gallery() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Gallery — Tifeh Collectibles',
    description: 'Editorial gallery of traditional, bridal, corporate, casual, runway and custom couture.',
    url: `${siteConfig.url}/gallery`,
  };

  return (
    <PageTransition>
      <SEO
        title="Gallery"
        path="/gallery"
        description="Browse the Tifeh Collectibles gallery — traditional, bridal, corporate, casual, runway and bespoke couture."
        jsonLd={jsonLd}
      />

      <header className="container-page pb-12 pt-28 sm:pt-36">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          <span className="eyebrow">The lookbook</span>
        </Reveal>
        <TextReveal
          as="h1"
          text="Gallery"
          className="mt-6 text-display-xl font-medium text-ink"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            A living archive of the house. Filter by line, then tap any piece to view it
            full-screen.
          </p>
        </Reveal>
      </header>

      <section aria-label="Gallery" className="container-page pb-28">
        <GalleryGrid />
      </section>
    </PageTransition>
  );
}
