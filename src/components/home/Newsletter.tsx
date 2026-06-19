import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const handleSubmit = () => {
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      return;
    }
    // Wire this to your ESP (Mailchimp, Beehiiv, ConvertKit…).
    setStatus('success');
    setEmail('');
  };

  return (
    <section aria-labelledby="newsletter-heading" className="border-t border-sand bg-cream/60">
      <div className="container-page grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-20">
        <Reveal>
          <p className="eyebrow">The atelier letter</p>
          <h2
            id="newsletter-heading"
            className="mt-4 text-display-sm font-medium text-ink"
          >
            First looks, private fittings &amp; new collections.
          </h2>
          <p className="mt-3 max-w-md text-muted">
            A few considered emails a year. No noise — only the work and the moments worth dressing for.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 border border-gold/40 bg-canvas px-5 py-4 text-ink"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>You’re on the list. Welcome to the atelier.</span>
            </motion.div>
          ) : (
            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex items-center border-b border-ink/30 focus-within:border-gold">
                <input
                  id="newsletter-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                  className="w-full bg-transparent py-3 pr-3 text-ink placeholder:text-muted/70 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  aria-label="Subscribe"
                  className="grid h-11 w-11 shrink-0 place-items-center text-ink transition-colors hover:text-gold"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              {status === 'error' && (
                <p id="newsletter-error" role="alert" className="mt-2 text-sm text-gold-deep">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
