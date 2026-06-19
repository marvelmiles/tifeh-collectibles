import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title: string;
  description?: string;
  /** Path only, e.g. "/gallery". Combined with the site URL for canonical/OG. */
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  /** Optional JSON-LD structured data object for the page. */
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

export function SEO({
  title,
  description = siteConfig.description,
  path = '/',
  image = `${siteConfig.url}/og-image.svg`,
  type = 'website',
  jsonLd,
  noindex = false,
}: SEOProps) {
  const fullTitle =
    title === siteConfig.name ? title : `${title} — ${siteConfig.name}`;
  const canonical = `${siteConfig.url}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
