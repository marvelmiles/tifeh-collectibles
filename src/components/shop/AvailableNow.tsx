import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Ruler } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ProductCard } from './ProductCard';
import { ProductCategoryTabs } from './ProductCategoryTabs';
import { productCategories } from '@/data/products';
import { stagger } from '@/lib/motion';
import type { ProductCategorySlug } from '@/types';

const [firstCategory] = productCategories;

export function AvailableNow() {
  const [activeSlug, setActiveSlug] = useState<ProductCategorySlug>(firstCategory.slug);
  const activeCategory =
    productCategories.find((category) => category.slug === activeSlug) ?? firstCategory;

  return (
    <section
      id="available"
      aria-label="Pieces available for purchase"
      className="border-y border-sand bg-canvas py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Available now"
            title="Ready to wear"
            lead="Finished pieces on the rail, ready to ship. Every style is priced by size band, so you always know the cost before you order."
          />
          <Reveal delay={0.15} className="hidden md:block">
            <p className="inline-flex items-center gap-2 border border-sand px-4 py-3 font-sans text-[0.78rem] uppercase tracking-wide text-muted">
              <Ruler className="h-4 w-4 text-gold" aria-hidden="true" />
              Sizes 4 and above
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <ProductCategoryTabs active={activeSlug} onChange={setActiveSlug} />
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.slug}
            id={`panel-${activeCategory.slug}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeCategory.slug}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 max-w-prose text-base leading-relaxed text-muted"
            >
              {activeCategory.tagline}
            </motion.p>

            <motion.ul
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={stagger(0.1, 0.1)}
              initial="hidden"
              animate="visible"
            >
              {activeCategory.products.map((product) => (
                <li key={product.id} className="flex">
                  <ProductCard product={product} />
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
