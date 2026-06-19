import { lazy, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

// Route-level code splitting — each page is its own chunk.
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const CollectionDetails = lazy(() => import('@/pages/CollectionDetails'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export default function App() {
  const [loading, setLoading] = useState(true);

  // Hold the intro briefly on first paint, then reveal the app.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = window.setTimeout(() => setLoading(false), reduce ? 200 : 1700);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="collections/:slug" element={<CollectionDetails />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
