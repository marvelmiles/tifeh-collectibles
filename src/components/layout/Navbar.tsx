import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks, siteConfig } from '@/config/site';
import { useScrolledPast } from '@/hooks/useScrollPosition';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { EASE_EDITORIAL } from '@/lib/motion';

export function Navbar() {
  const scrolled = useScrolledPast(40);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the overlay menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial ${
        menuOpen
          ? 'bg-canvas border-b border-sand/70'
          : solid
            ? 'bg-canvas/85 backdrop-blur-md border-b border-sand/70'
            : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between sm:h-20"
      >
        <Link
          to="/"
          className="font-display text-xl font-medium tracking-tight text-ink sm:text-2xl"
          aria-label={`${siteConfig.name} — home`}
        >
          Tifeh<span className="text-gold">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `link-underline font-sans text-[0.8rem] uppercase tracking-wide transition-colors ${
                    isActive ? 'text-gold' : 'text-ink hover:text-gold'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden border border-ink/25 px-5 py-2.5 font-sans text-[0.75rem] uppercase tracking-wide text-ink transition-colors hover:border-gold hover:text-gold lg:inline-block"
          >
            Book a fitting
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center text-ink md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-16 z-50 flex flex-col bg-canvas sm:top-20 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="container-page flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, ease: EASE_EDITORIAL }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block py-3 font-display text-4xl ${isActive ? 'text-gold' : 'text-ink'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * navLinks.length + 0.05 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-ink px-7 py-3.5 font-sans text-[0.8rem] uppercase tracking-wide text-canvas"
                >
                  Book a fitting
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
