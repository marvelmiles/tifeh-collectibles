import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Link2, Check } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';
import { Image } from '@/components/ui/Image';
import { Reveal } from '@/components/ui/Reveal';
import { TextReveal } from '@/components/ui/TextReveal';
import { LinkButton } from '@/components/ui/Button';
import { getCollection, collections } from '@/data/collections';
import { categoryLabel, siteConfig } from '@/config/site';
import { fadeUp, inView, stagger } from '@/lib/motion';
import NotFound from './NotFound';

function ShareRow({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* user cancelled — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(`${title} — ${siteConfig.name}`);

  const networks = [
    { label: 'Share on X', href: `https://twitter.com/intent/tweet?url=${encoded}&text=${text}` },
    { label: 'Share on Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}` },
    { label: 'Share on Pinterest', href: `https://pinterest.com/pin/create/button/?url=${encoded}&description=${text}` },
    { label: 'Share on WhatsApp', href: `https://wa.me/?text=${text}%20${encoded}` },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="eyebrow text-muted">Share</span>
      <div className="flex flex-wrap items-center gap-3">
        {networks.map((n) => (
          <a
            key={n.label}
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-ink hover:text-gold"
          >
            {n.label.replace('Share on ', '')}
          </a>
        ))}
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-sm text-ink transition-colors hover:text-gold"
          aria-label="Copy link to this collection"
        >
          {copied ? <Check className="h-4 w-4 text-gold" /> : <Link2 className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy link'}
        </button>
      </div>
    </div>
  );
}

export default function CollectionDetails() {
  const { slug } = useParams<{ slug: string }>();
  const collection = slug ? getCollection(slug) : undefined;

  if (!collection) return <NotFound />;

  const related = collection.related
    .map((s) => collections.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const url = `${siteConfig.url}/collections/${collection.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: collection.title,
    description: collection.description,
    image: collection.cover,
    brand: { '@type': 'Brand', name: siteConfig.name },
    category: categoryLabel(collection.category),
  };

  return (
    <PageTransition>
      <SEO
        title={collection.title}
        path={`/collections/${collection.slug}`}
        description={collection.tagline}
        image={collection.cover}
        type="article"
        jsonLd={jsonLd}
      />

      {/* Back link */}
      <div className="container-page pt-28 sm:pt-32">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to gallery
        </Link>
      </div>

      {/* Header */}
      <header className="container-page grid gap-10 py-12 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <Reveal className="flex items-center gap-3">
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            <span className="eyebrow">{collection.season} · {categoryLabel(collection.category)}</span>
          </Reveal>
          <TextReveal
            as="h1"
            text={collection.title}
            className="mt-5 text-display-lg font-medium text-ink"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 font-display text-xl italic text-gold sm:text-2xl">
              {collection.tagline}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Cover */}
      <Reveal className="container-page">
        <Image
          src={collection.cover}
          alt={`${collection.title} — cover look`}
          priority
          className="aspect-[16/10] w-full"
        />
      </Reveal>

      {/* Description + inspiration */}
      <section className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <h2 className="font-display text-display-sm font-medium text-ink">About the collection</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">{collection.description}</p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:border-l lg:border-sand lg:pl-12">
          <h2 className="eyebrow">Design inspiration</h2>
          <p className="mt-5 font-display text-xl leading-relaxed text-ink">{collection.inspiration}</p>
        </Reveal>
      </section>

      {/* Gallery strip */}
      <section aria-label={`${collection.title} gallery`} className="container-page pb-20">
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {collection.gallery.map((src, i) => (
            <motion.div key={src + i} variants={fadeUp}>
              <Image
                src={src}
                alt={`${collection.title} — look ${i + 1}`}
                className="aspect-[3/4] w-full"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 border-t border-sand pt-8">
          <ShareRow title={collection.title} url={url} />
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-sand bg-cream/50 py-20">
          <div className="container-page">
            <h2 id="related-heading" className="eyebrow mb-10">You may also like</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {related.map((rel) => (
                <Link key={rel.slug} to={`/collections/${rel.slug}`} className="group block">
                  <div className="overflow-hidden">
                    <Image
                      src={rel.cover}
                      alt={rel.title}
                      className="aspect-[16/10] w-full transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-medium text-ink transition-colors group-hover:text-gold">
                    {rel.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{rel.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-page py-20 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl font-display text-display-sm font-medium text-ink">
            Commission a piece from this collection.
          </p>
          <div className="mt-8">
            <LinkButton to="/contact" withArrow>
              Enquire now
            </LinkButton>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
