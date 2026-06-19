/**
 * Photography helper.
 *
 * The portfolio ships with neutral Unsplash placeholders so the layout,
 * masonry grid and lightbox can be demonstrated immediately. Replace these
 * with the brand's real lookbook photography by either:
 *   1. swapping the IDs below for your own Unsplash IDs, or
 *   2. importing local files (place them in /src/assets and import them).
 *
 * `auto=format` makes Unsplash serve modern formats (AVIF/WebP) automatically,
 * and the width parameter keeps payloads small. A blur-up `thumb` is derived
 * from the same source. If any image fails to load, <Image> falls back to a
 * tasteful gradient so the page never shows a broken-image icon.
 */
const UNSPLASH = 'https://images.unsplash.com/photo-';

interface BuildOpts {
  w?: number;
  h?: number;
}

export const photo = (id: string, { w = 900, h }: BuildOpts = {}): string => {
  const params = new URLSearchParams({
    auto: 'format',
    fit: 'crop',
    q: '70',
    w: String(w),
  });
  if (h) params.set('h', String(h));
  return `${UNSPLASH}${id}?${params.toString()}`;
};

/** Tiny, heavily-compressed version of the same image for blur-up loading. */
export const thumb = (id: string): string =>
  `${UNSPLASH}${id}?auto=format&fit=crop&q=20&w=40&blur=8`;
