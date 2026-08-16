import { motion } from 'framer-motion';
import { productCategories } from '@/data/products';
import type { ProductCategorySlug } from '@/types';

interface ProductCategoryTabsProps {
  active: ProductCategorySlug;
  onChange: (slug: ProductCategorySlug) => void;
}

export function ProductCategoryTabs({ active, onChange }: ProductCategoryTabsProps) {
  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <div
        role="tablist"
        aria-label="Filter available pieces by category"
        className="flex w-max gap-2 sm:w-full sm:flex-wrap"
      >
        {productCategories.map((category) => {
          const isActive = active === category.slug;
          return (
            <button
              key={category.slug}
              type="button"
              role="tab"
              id={`tab-${category.slug}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.slug}`}
              onClick={() => onChange(category.slug)}
              className={`relative isolate whitespace-nowrap px-4 py-2 font-sans text-[0.8rem] uppercase tracking-wide transition-colors duration-300 ${
                isActive ? 'text-canvas' : 'text-ink hover:text-gold'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="available-tab-pill"
                  className="absolute inset-0 bg-ink"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">
                {category.label}
                <span className={isActive ? 'text-gold' : 'text-muted'}>
                  {' '}
                  · {category.products.length}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
