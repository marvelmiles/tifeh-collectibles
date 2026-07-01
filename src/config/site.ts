import type { Category } from "@/types";

/**
 * Single source of truth for brand-level configuration. Update contact
 * details, social handles and the WhatsApp number here.
 */
export const siteConfig = {
  name: "Precious Executive Wear",
  shortName: "Tifeh",
  tagline: "Couture rooted in culture.",
  description:
    "An African luxury fashion house crafting traditional, bridal, corporate and runway couture where heritage meets the modern runway.",
  url: "https://tifeh-collectibles.netlify.app",
  locations: "Lagos · Nigeria",
  email: "akinwunmiboluwatife2@gmail.com",
  phoneDisplay: "+234 916 857 3541",
  // International format, digits only — used to build the WhatsApp link.
  whatsapp: "2349168573541",
  social: {
    instagram:
      "https://www.instagram.com/precious_executive_wear?igsh=d3U1NjUxeXY0aG55&utm_source=qr",
    tiktok: "https://vt.tiktok.com/ZSC6Wb6TS/",
    whatsapp: "https://wa.me/2349168573541",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const categories: Category[] = [
  { slug: "corporate", label: "Gown" },
  { slug: "casual", label: "Straight Leg Pant" },
  { slug: "runway", label: "Two Pieces" },
  { slug: "custom", label: "Suits" },
  { slug: "wideleg", label: "Wide Leg Pants" },
];

export const categoryLabel = (slug: string): string =>
  categories.find((c) => c.slug === slug)?.label ?? slug;