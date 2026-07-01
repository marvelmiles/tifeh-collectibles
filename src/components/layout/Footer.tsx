import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';
import { navLinks, siteConfig, categories } from '@/config/site';
import { Newsletter } from '@/components/home/Newsletter';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="currentColor" aria-hidden="true">
    <path d="M16.6 5.82c-.87-.87-1.36-2.03-1.36-3.32h-3.19v13.79c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1-2.9-2.9 2.9 2.9 0 0 1 2.9-2.9c.28 0 .55.04.8.12v-3.24a6.1 6.1 0 0 0-.8-.05A6.09 6.09 0 0 0 3.15 16.3 6.09 6.09 0 0 0 9.24 22.4a6.09 6.09 0 0 0 6.09-6.1V9.53a8.31 8.31 0 0 0 4.84 1.55V7.9a4.85 4.85 0 0 1-3.57-2.08Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.38c-.28-.14-1.64-.81-1.9-.9-.25-.1-.43-.14-.62.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.16-.43-2.2-1.36-.82-.73-1.36-1.63-1.53-1.9-.16-.28-.02-.43.13-.58.14-.14.32-.36.48-.55.16-.18.21-.32.32-.53.1-.21.05-.39-.04-.53-.09-.14-.62-1.5-.85-2.05-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.53-.01-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.29 0 1.36.98 2.67 1.12 2.86.14.18 1.9 2.9 4.68 3.95 2.78 1.06 2.78.7 3.28.66.5-.05 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32ZM12.02 22h-.01a9.95 9.95 0 0 1-5.08-1.39l-.36-.22-3.78 1 1.01-3.68-.24-.38A9.96 9.96 0 1 1 22 12a9.96 9.96 0 0 1-9.98 10Zm5.83-14.16A8.29 8.29 0 0 0 12.03 3.7a8.29 8.29 0 0 0-8.29 8.29c0 1.63.49 3.2 1.4 4.55l.22.33-.87 3.17 3.25-.85.32.19a8.25 8.25 0 0 0 4.97 1.62h.01a8.29 8.29 0 0 0 8.28-8.29 8.24 8.24 0 0 0-2.47-5.87Z" />
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-canvas">
      <Newsletter />

      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="font-display text-3xl font-medium text-ink">
              Tifeh<span className="text-gold">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-muted">{siteConfig.description}</p>
            <p className="mt-6 eyebrow">{siteConfig.locations}</p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h3 className="eyebrow mb-5">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="link-underline text-ink/80 hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Collections */}
          <nav aria-label="Collections" className="md:col-span-2">
            <h3 className="eyebrow mb-5">Lines</h3>
            <ul className="space-y-3">
              {categories.slice(0, 4).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/gallery?category=${c.slug}`}
                    className="link-underline text-ink/80 hover:text-gold"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Connect</h3>
            <ul className="space-y-3 text-ink/80">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="link-underline break-all hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`} className="link-underline hover:text-gold">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink transition-colors hover:text-gold">
                <Instagram className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-ink transition-colors hover:text-gold">
                <TikTokIcon />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-ink transition-colors hover:text-gold">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="rule mt-14" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>
            Crafted in Nigeria · <span className="text-gold">Couture rooted in culture</span>
          </p>
        </div>
      </div>
    </footer>
  );
}