import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';
import { Image } from '@/components/ui/Image';
import { Reveal } from '@/components/ui/Reveal';
import { TextReveal } from '@/components/ui/TextReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';
import { photo, thumb } from '@/lib/images';
import { fadeUp, inView, stagger } from '@/lib/motion';

const process = [
  {
    title: 'Conversation',
    body: 'Every piece begins with listening — to the occasion, the body, the story it needs to tell.',
  },
  {
    title: 'Cloth',
    body: 'We source and, where we can, hand-weave the textiles, choosing materials that carry meaning.',
  },
  {
    title: 'Pattern & toile',
    body: 'A pattern is drafted and a calico toile is fitted, refined across appointments until the line is right.',
  },
  {
    title: 'Hand-finish',
    body: 'Beadwork, embroidery and final couture finishing are completed by hand in the atelier.',
  },
];

const values = [
  {
    label: 'Mission',
    title: 'Elevate African craft to couture.',
    body: 'To give the cloth, technique and stories of our heritage the craftsmanship, finish and reverence of the world’s great fashion houses — and to make them wearable for modern life.',
  },
  {
    label: 'Vision',
    title: 'A house that the world wears.',
    body: 'To build an enduring African luxury house: one whose pieces are kept, passed down and recognised on any runway or red carpet, anywhere.',
  },
];

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About"
        path="/about"
        description="The story of Tifeh Collectibles — an African luxury fashion house elevating heritage craft to couture."
      />

      {/* Intro */}
      <header className="container-page pb-20 pt-28 sm:pt-36">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          <span className="eyebrow">Our story</span>
        </Reveal>
        <TextReveal
          as="h1"
          text="A house built on heritage, finished by hand."
          className="mt-6 max-w-4xl text-display-lg font-medium text-ink"
        />
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted">
            Tifeh Collectibles was founded in Nigeria with one ambition: to prove that
            African craft belongs in the same conversation as the world’s finest couture.
            What began as a single commissioned gown is now a house dressing weddings,
            boardrooms and runways across the continent and beyond.
          </p>
        </Reveal>
      </header>

      {/* Portrait + story */}
      <section aria-labelledby="designer-heading" className="container-page pb-24">
        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Image
              src={photo('1531123897727-8f129e1688ce', { w: 900, h: 1100 })}
              thumb={thumb('1531123897727-8f129e1688ce')}
              alt="Portrait of the founder of Tifeh Collectibles in the atelier"
              className="h-full min-h-[24rem] w-full"
            />
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-6">
            <h2 id="designer-heading" className="font-display text-display-sm font-medium text-ink">
              The designer
            </h2>
            <div className="mt-6 space-y-5 text-muted">
              <p className="leading-relaxed">
                Raised between the loom rooms of family weavers and the pages of
                imported fashion magazines, the founder grew up fluent in two
                languages of cloth — and frustrated that the world only seemed to
                celebrate one of them.
              </p>
              <p className="leading-relaxed">
                Tifeh Collectibles is the answer to that frustration: a studio where
                aso-oke and atelier technique sit at the same table, where a bride’s
                gown can hold both her grandmother’s heritage and her own modern
                confidence.
              </p>
              <p className="leading-relaxed">
                Today the house remains deliberately small. We take a limited number of
                commissions each season so that every garment receives the time, the
                fittings and the hand-finishing it deserves.
              </p>
            </div>
            <div className="mt-8">
              <p className="font-display text-2xl italic text-gold">Tifeh</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">Founder &amp; Creative Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-label="Mission and vision" className="border-y border-sand bg-cream/50 py-24">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          {values.map((v) => (
            <Reveal key={v.label}>
              <p className="eyebrow">{v.label}</p>
              <h2 className="mt-4 font-display text-display-sm font-medium text-ink">{v.title}</h2>
              <p className="mt-5 leading-relaxed text-muted">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Creative process — a true sequence, hence numbered */}
      <section aria-labelledby="process-heading" className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="In the atelier"
          title="The creative process"
          lead="Four stages, every time — from the first conversation to the final stitch."
          className="mb-16"
        />
        <motion.ol
          className="grid gap-px overflow-hidden border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={inView}
        >
          {process.map((step, i) => (
            <motion.li key={step.title} variants={fadeUp} className="bg-canvas p-7">
              <span className="font-display text-4xl text-gold">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </section>

      {/* Closing CTA */}
      <section className="container-page pb-28 text-center">
        <Reveal>
          <p className="mx-auto max-w-2xl font-display text-display-sm font-medium text-ink">
            Have something in mind? Let’s begin the conversation.
          </p>
          <div className="mt-8">
            <LinkButton to="/contact" withArrow>
              Start a commission
            </LinkButton>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}
