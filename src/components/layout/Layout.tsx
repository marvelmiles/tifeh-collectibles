import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { BackToTop } from '@/components/ui/BackToTop';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

function RouteFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center" aria-live="polite" aria-busy="true">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-sand border-t-gold" />
      <span className="sr-only">Loading page…</span>
    </div>
  );
}

export function Layout() {
  const location = useLocation();

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Suspense fallback={<RouteFallback />}>
          <AnimatePresence mode="wait">
            {/* key on pathname so route changes animate in/out */}
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </Suspense>
      </div>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
