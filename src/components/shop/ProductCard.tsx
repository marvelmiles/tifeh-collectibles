import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/ui/icons/WhatsAppIcon';
import { ProductGallery } from './ProductGallery';
import { formatNaira } from '@/lib/currency';
import { buildWhatsAppLink, enquiryMessage } from '@/lib/whatsapp';
import { fadeUp } from '@/lib/motion';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const href = buildWhatsAppLink(enquiryMessage(product.name, product.colourway));
  const images = [product.image, ...(product.gallery ?? [])];

  return (
    <motion.article
      variants={fadeUp}
      className="group flex w-full flex-col border border-sand bg-canvas transition-colors duration-600 ease-editorial hover:border-gold/50"
    >
      <ProductGallery images={images} alt={product.alt}>
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 bg-canvas/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          <span className="eyebrow text-ink">In stock</span>
        </span>
      </ProductGallery>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-medium text-ink transition-colors duration-400 group-hover:text-gold sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-1 font-sans text-sm text-muted">{product.colourway}</p>

        {product.description && (
          <p className="mt-3 font-sans text-sm leading-relaxed text-muted">
            {product.description}
          </p>
        )}

        <span
          aria-hidden="true"
          className="mt-5 h-px w-10 origin-left bg-gold transition-transform duration-600 ease-editorial group-hover:scale-x-[3.2]"
        />

        <dl className="mt-5 space-y-2.5">
          {product.priceTiers.map((tier) => (
            <div
              key={tier.label}
              className="flex items-baseline justify-between gap-4 border-b border-sand/70 pb-2.5 last:border-b-0 last:pb-0"
            >
              <dt className="font-sans text-[0.78rem] uppercase tracking-wide text-muted">
                {tier.label}
              </dt>
              <dd className="font-display text-lg font-medium text-ink">
                {formatNaira(tier.price)}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order the ${product.name} in ${product.colourway} on WhatsApp`}
          className="mt-6 inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 font-sans text-[0.78rem] uppercase tracking-wide text-canvas transition-colors duration-400 ease-editorial hover:bg-gold-deep dark:hover:bg-gold dark:hover:text-ink"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span>Order on WhatsApp</span>
        </a>
      </div>
    </motion.article>
  );
}
