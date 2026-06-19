# Tifeh Collectibles

A premium fashion portfolio for **Tifeh Collectibles** — an African luxury fashion house.
Built as a fast, accessible, SEO-ready single-page application with editorial
typography, tasteful motion, and a fully filterable gallery.

> Design direction: *couture rooted in culture.* Off-white / cream / charcoal /
> warm beige with an antique-gold accent, oversized Playfair Display headings,
> and Inter for body and labels. The whole palette is configurable from one file.

---

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5** (code splitting, modern build)
- **Tailwind CSS 3** (design tokens via CSS variables)
- **React Router 6** (lazy-loaded routes)
- **Framer Motion 11** (page transitions, scroll reveals, micro-interactions)
- **react-helmet-async** (per-page SEO, Open Graph, Twitter, JSON-LD)
- **@fontsource** self-hosted variable fonts
- **lucide-react** icons

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

Requires Node 18+.

---

## Configuration

### Brand details
Edit **`src/config/site.ts`** — name, tagline, locations, email, phone, the
WhatsApp number, and all social links live here.

### Colour palette
Edit the CSS variables at the top of **`src/index.css`** (`:root` for light,
`.dark` for dark mode). Tailwind classes (`text-ink`, `bg-cream`, `text-gold`…)
are mapped to these variables in `tailwind.config.js`, so changing a value
re-themes the entire site.

### Photography
The site ships with neutral placeholder imagery so the layout works out of the
box. Replace it with the brand's real lookbook in **`src/lib/images.ts`** and the
data files in **`src/data/`** (`gallery.ts`, `collections.ts`). Any image that
fails to load falls back to an on-brand gradient, so the layout never breaks.

### Contact form
The form works in three modes, selected by `VITE_FORM_PROVIDER` in your `.env`
(copy `.env.example` to `.env`):

| Mode       | Behaviour                                             |
|------------|-------------------------------------------------------|
| `demo`     | Simulates a successful send (default; delivers nothing) |
| `formspree`| Posts to your Formspree endpoint                       |
| `emailjs`  | Sends via the EmailJS REST API                         |

Set the matching keys in `.env`. Submissions are also logged locally
(`localStorage`) as a placeholder for a real datastore/CRM — see
`src/lib/contact.ts`.

---

## Project structure

```
src/
├── components/
│   ├── layout/      Navbar, Footer, Layout shell
│   ├── ui/          Reusable primitives (Button, Image, SEO, Lightbox, …)
│   ├── home/        Home-page sections (Hero, FeaturedCollections, …)
│   └── gallery/     Gallery grid, filter, item
├── config/          site.ts — single source of brand truth
├── data/            collections, gallery, testimonials
├── hooks/           useTheme, useScrollPosition, useInfiniteScroll
├── lib/             motion variants, image helper, contact logic
├── pages/           Home, About, Gallery, CollectionDetails, Contact, NotFound
├── types/           shared TypeScript types
├── App.tsx          providers + router
├── main.tsx         entry point
└── index.css        design tokens + base styles
```

---

## Features

- Immersive editorial hero with orchestrated load animation
- Masonry gallery with category filtering, infinite scroll, lazy loading, and an
  accessible full-screen lightbox (keyboard + focus management)
- Six collection detail pages with related collections and social sharing
- Validated, accessible contact form with loading / success / error states and
  honeypot spam protection
- Dark mode with system detection and no flash of the wrong theme
- Loading screen, back-to-top, floating WhatsApp button, newsletter band
- Scroll-triggered reveals, animated counters, text reveals, page transitions
- Full SEO: meta, Open Graph, Twitter cards, JSON-LD, `sitemap.xml`, `robots.txt`
- Accessibility: semantic landmarks, skip link, visible focus, reduced-motion
  support, labelled forms and controls
- Mobile-first and verified down to a 320px viewport (no horizontal scroll)

---

## Deployment

The app is a static SPA. `npm run build` outputs to `dist/`.

- **Vercel** — zero config; `vercel.json` adds the SPA rewrite + asset caching.
- **Netlify** — `public/_redirects` handles SPA routing.
- **Any static host** — serve `dist/` and rewrite all unknown routes to
  `index.html`.

Remember to update the production domain in `index.html`, `src/config/site.ts`,
`public/sitemap.xml`, and `public/robots.txt`.

---

## Accessibility & performance notes

- Run `npm run build && npm run preview`, then audit with Lighthouse.
- Replace placeholder photography with appropriately sized, compressed images
  (AVIF/WebP) for the best LCP. The included `<Image>` component already lazy-loads,
  decodes async, and prioritises the hero image.

---

_Placeholder photography via Unsplash. Replace with licensed brand imagery before launch._
