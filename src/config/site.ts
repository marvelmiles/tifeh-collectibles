import type { Category } from "@/types";

/**
 * Single source of truth for brand-level configuration. Update contact
 * details, social handles and the WhatsApp number here.
 */
export const siteConfig = {
  name: "Tifeh Collectibles",
  shortName: "Tifeh",
  tagline: "Couture rooted in culture.",
  description:
    "An African luxury fashion house crafting traditional, bridal, corporate and runway couture where heritage meets the modern runway.",
  url: "https://tifeh-collectibles.netlify.app",
  locations: "Abuja · Lagos",
  email: "akinwunmiboluwatife2@gmail.com",
  phoneDisplay: "+234 916 857 3541",
  // International format, digits only — used to build the WhatsApp link.
  whatsapp: "2349168573541",
  social: {
    instagram: "https://www.instagram.com/tifehcollectibles",
    facebook: "https://www.facebook.com/tifehcollectibles",
    pinterest: "https://www.pinterest.com/tifehcollectibles",
    tiktok: "https://www.tiktok.com/@tifehcollectibles",
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const categories: Category[] = [
  { slug: "traditional", label: "Traditional Wear" },
  { slug: "corporate", label: "Corporate Wear" },
  { slug: "bridal", label: "Bridal Collections" },
  { slug: "casual", label: "Casual Collections" },
  { slug: "runway", label: "Runway Designs" },
  { slug: "custom", label: "Custom Projects" },
];

export const categoryLabel = (slug: string): string =>
  categories.find((c) => c.slug === slug)?.label ?? slug;
