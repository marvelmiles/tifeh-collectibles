import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/Image';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { featuredCollections } from '@/data/collections';
import { categoryLabel } from '@/config/site';
import { fadeUp, inView, stagger } from '@/lib/motion';

export function FeaturedCollections() {
  return (
    <section
      aria-labelledby="featured-heading"
      className="border-y border-sand bg-cream/50 py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Collections"
            lead="Six lines, one philosophy — from hand-woven tradition to the runway."
          />
          <Reveal className="hidden md:block">
            <LinkButton to="/gallery" variant="ghost" withArrow className="px-0">
              See all
            </LinkButton>
          </Reveal>
        </div>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-2"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {featuredCollections.map((collection, i) => (
            <motion.li
              key={collection.slug}
              variants={fadeUp}
              className={i % 2 === 1 ? 'sm:mt-16' : ''}
            >
              <Link to={`/collections/${collection.slug}`} className="group block">
                <div className="relative overflow-hidden">
                  <Image
                    src={collection.cover}
                    alt={collection.title}
                    className="aspect-[3/4] w-full transition-transform duration-[1.2s] ease-editorial group-hover:scale-[1.04]"
                  />
                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
                  <div className="absolute right-4 top-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-canvas text-ink opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-ink transition-colors group-hover:text-gold sm:text-3xl">
                      {collection.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{collection.tagline}</p>
                  </div>
                  <span className="eyebrow whitespace-nowrap text-muted">
                    {categoryLabel(collection.category)}
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal className="mt-12 md:hidden">
          <LinkButton to="/gallery" variant="outline" withArrow>
            See all collections
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
