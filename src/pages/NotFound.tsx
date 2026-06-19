import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';
import { LinkButton } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found" path="/404" noindex />
      <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-28 text-center">
        <p className="font-display text-[7rem] leading-none text-gold sm:text-[10rem]">404</p>
        <h1 className="mt-2 font-display text-display-sm font-medium text-ink">
          This look isn’t on the rail.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The page you’re after may have moved or never existed. Let’s get you back to the collections.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <LinkButton to="/" withArrow>
            Back to home
          </LinkButton>
          <LinkButton to="/gallery" variant="outline">
            View gallery
          </LinkButton>
        </div>
      </section>
    </PageTransition>
  );
}
