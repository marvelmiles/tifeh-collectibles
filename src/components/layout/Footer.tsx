import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { navLinks, siteConfig, categories } from '@/config/site';
import { Newsletter } from '@/components/home/Newsletter';

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[1.15rem] w-[1.15rem]" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.5 2 3.7 5.97 3.7 9.28c0 2 .76 3.78 2.39 4.45.27.11.51 0 .59-.29l.24-.94c.08-.3.05-.4-.17-.66-.48-.57-.79-1.31-.79-2.36 0-3.04 2.27-5.76 5.92-5.76 3.23 0 5 1.97 5 4.61 0 3.47-1.54 6.4-3.82 6.4-1.26 0-2.2-1.04-1.9-2.32.36-1.52 1.06-3.17 1.06-4.27 0-.98-.53-1.81-1.62-1.81-1.29 0-2.32 1.33-2.32 3.11 0 1.13.38 1.9.38 1.9l-1.54 6.51c-.46 1.93-.07 4.3-.04 4.54.02.14.2.18.28.07.12-.15 1.6-1.98 2.1-3.81.14-.52.81-3.16.81-3.16.4.76 1.57 1.43 2.81 1.43 3.7 0 6.21-3.37 6.21-7.89C20.3 5.05 17.36 2 12.04 2Z" />
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
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink transition-colors hover:text-gold">
                <Facebook className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              </a>
              <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="text-ink transition-colors hover:text-gold">
                <PinterestIcon />
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
