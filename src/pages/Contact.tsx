import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Mail, MapPin, Phone, AlertCircle } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';
import { Reveal } from '@/components/ui/Reveal';
import { TextReveal } from '@/components/ui/TextReveal';
import { sendContactMessage, type ContactPayload } from '@/lib/contact';
import { siteConfig } from '@/config/site';
import { EASE_EDITORIAL } from '@/lib/motion';

type Status = 'idle' | 'submitting' | 'success' | 'error';
type Errors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm: ContactPayload = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
};

function validate(form: ContactPayload): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = 'Please enter your full name.';
  if (!EMAIL_RE.test(form.email)) errors.email = 'Please enter a valid email address.';
  if (form.subject.trim().length < 3) errors.subject = 'Add a short subject.';
  if (form.message.trim().length < 10) errors.message = 'Tell us a little more (10+ characters).';
  return errors;
}

const fieldBase =
  'w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none';

export default function Contact() {
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState<Partial<Record<keyof ContactPayload, boolean>>>({});

  const update = (key: keyof ContactPayload, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) {
      setErrors(validate({ ...form, [key]: value }));
    }
  };

  const blur = (key: keyof ContactPayload) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(validation).length > 0) return;

    setStatus('submitting');
    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm(initialForm);
      setTouched({});
    } catch {
      setStatus('error');
    }
  };

  const describedBy = (key: keyof ContactPayload) =>
    errors[key] ? `${key}-error` : undefined;

  return (
    <PageTransition>
      <SEO
        title="Contact"
        path="/contact"
        description="Get in touch with Tifeh Collectibles to begin a bespoke commission or enquire about a collection."
      />

      <header className="container-page pb-12 pt-28 sm:pt-36">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          <span className="eyebrow">Get in touch</span>
        </Reveal>
        <TextReveal
          as="h1"
          text="Begin the conversation."
          className="mt-6 max-w-3xl text-display-lg font-medium text-ink"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            Tell us about the occasion, the collection or the piece you have in mind.
            We reply to every enquiry within two business days.
          </p>
        </Reveal>
      </header>

      <section className="container-page grid gap-14 pb-28 lg:grid-cols-12 lg:gap-20">
        {/* Form */}
        <div className="lg:col-span-7">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_EDITORIAL }}
              className="flex flex-col items-start gap-5 border border-gold/40 bg-cream/50 p-8 sm:p-10"
              role="status"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                <Check className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">Message received.</h2>
                <p className="mt-2 max-w-md text-muted">
                  Thank you for reaching out to {siteConfig.name}. We’ll be in touch shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="link-underline text-sm text-ink hover:text-gold"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              {/* Honeypot — visually hidden, off-screen, not announced */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label htmlFor="company">Company (leave blank)</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                />
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="eyebrow mb-2 block text-muted">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ada Obi"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    onBlur={() => blur('name')}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={describedBy('name')}
                    className={fieldBase}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-2 text-sm text-gold-deep">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="eyebrow mb-2 block text-muted">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    onBlur={() => blur('email')}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={describedBy('email')}
                    className={fieldBase}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 text-sm text-gold-deep">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="eyebrow mb-2 block text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Bridal commission · Spring wedding"
                  value={form.subject}
                  onChange={(e) => update('subject', e.target.value)}
                  onBlur={() => blur('subject')}
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={describedBy('subject')}
                  className={fieldBase}
                />
                {errors.subject && (
                  <p id="subject-error" role="alert" className="mt-2 text-sm text-gold-deep">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="eyebrow mb-2 block text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about the occasion, timeline and any inspiration…"
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  onBlur={() => blur('message')}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={describedBy('message')}
                  className={`${fieldBase} resize-y`}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-2 text-sm text-gold-deep">
                    {errors.message}
                  </p>
                )}
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  className="flex items-center gap-3 border border-gold-deep/40 bg-gold/5 px-4 py-3 text-sm text-gold-deep"
                >
                  <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Something went wrong sending your message. Please try again, or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group inline-flex items-center justify-center gap-2 bg-ink px-8 py-4 font-sans text-[0.8rem] uppercase tracking-wide text-canvas transition-colors hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-70 dark:hover:bg-gold dark:hover:text-ink"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          )}
        </div>

        {/* Details */}
        <aside className="lg:col-span-5 lg:border-l lg:border-sand lg:pl-12">
          <h2 className="eyebrow mb-8">Atelier</h2>
          <ul className="space-y-7">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center border border-sand text-gold">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-ink">Visit by appointment</p>
                <p className="text-muted">{siteConfig.locations}, Nigeria</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center border border-sand text-gold">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-ink">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="link-underline break-all text-muted hover:text-gold">
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center border border-sand text-gold">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-ink">Phone &amp; WhatsApp</p>
                <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`} className="link-underline text-muted hover:text-gold">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-10 border-t border-sand pt-8">
            <p className="eyebrow mb-4">Follow</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline text-ink hover:text-gold">Instagram</a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="link-underline text-ink hover:text-gold">Facebook</a>
              <a href={siteConfig.social.pinterest} target="_blank" rel="noopener noreferrer" className="link-underline text-ink hover:text-gold">Pinterest</a>
            </div>
          </div>
        </aside>
      </section>
    </PageTransition>
  );
}
