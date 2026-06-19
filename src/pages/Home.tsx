import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';
import { Hero } from '@/components/home/Hero';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { Stats } from '@/components/home/Stats';
import { Testimonials } from '@/components/home/Testimonials';
import { ContactCTA } from '@/components/home/ContactCTA';
import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <PageTransition>
      <SEO
        title={siteConfig.name}
        description={siteConfig.description}
        path="/"
      />
      <Hero />
      <AboutPreview />
      <FeaturedCollections />
      <Stats />
      <Testimonials />
      <ContactCTA />
    </PageTransition>
  );
}
