import { motion } from 'framer-motion';
import { categories } from '@/config/site';
import type { CategorySlug } from '@/types';

export type Filter = CategorySlug | 'all';

interface CategoryFilterProps {
  active: Filter;
  onChange: (filter: Filter) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  const items: { slug: Filter; label: string }[] = [
    { slug: 'all', label: 'All work' },
    ...categories.map((c) => ({ slug: c.slug as Filter, label: c.label })),
  ];

  return (
    <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <div
        role="tablist"
        aria-label="Filter collections by category"
        className="flex w-max gap-2 sm:w-full sm:flex-wrap"
      >
        {items.map((item) => {
          const isActive = active === item.slug;
          const count = item.slug === 'all'
            ? Object.values(counts).reduce((a, b) => a + b, 0)
            : counts[item.slug] ?? 0;
          return (
            <button
              key={item.slug}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(item.slug)}
              className={`relative whitespace-nowrap px-4 py-2 font-sans text-[0.8rem] uppercase tracking-wide transition-colors duration-300 ${
                isActive ? 'text-canvas' : 'text-ink hover:text-gold'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 bg-ink"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {item.label}
              <span className={isActive ? 'text-gold' : 'text-muted'}> · {count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
