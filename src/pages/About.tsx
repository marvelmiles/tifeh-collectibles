import { motion } from 'framer-motion';
import { PageTransition } from '@/components/ui/PageTransition';
import { SEO } from '@/components/ui/SEO';

import { Reveal } from '@/components/ui/Reveal';
import { TextReveal } from '@/components/ui/TextReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LinkButton } from '@/components/ui/Button';

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
    body: 'At Precious Executive Wear, our mission is to design and create stylish, comfortable, and sophisticated clothing for corporate women, helping them present their best in every professional setting. We are committed to quality craftsmanship, exceptional customer satisfaction, and continuous innovation while promoting confidence and elegance through fashion.',
  },
  {
    label: 'Vision',
    title: 'A house that the world wears.',
    body: 'To become a leading executive wear brand that empowers corporate women through elegant, professional, and high quality fashion, inspiring confidence, excellence, and self expression in every outfit.',
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
         Boluwatife Akinwunmi, the fourth child and first daughter in a family of six children. born in Ibadan, Oyo State, and raised with strong family values that shaped my determination, creativity, and work ethic.
         began my educational journey at Dynamic School, Lagos, for primary education and later attended King George Memorial College, Lagos, for my secondary education. After completing secondary school, I discovered my passion for fashion and garment construction. In 2015, I began learning the art of sewing in Badagry, laying the foundation for what would become a lifelong career.

          </p>
        </Reveal>
      </header>

      {/* Portrait + story */}
      <section aria-labelledby="designer-heading" className="container-page pb-24">
        <div className="grid items-stretch gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
<img
  src="/Images/boluwatifeh.jpeg"
  alt="The Tifeh atelier — a garment taking shape on the stand"
  className="relative aspect-[4/5] w-full object-cover"
/>
          </Reveal>

          <div className="flex flex-col justify-center lg:col-span-7 lg:pl-6">
            <h2 id="designer-heading" className="font-display text-display-sm font-medium text-ink">
              The designer
            </h2>
            <div className="mt-6 space-y-5 text-muted">
              <p className="leading-relaxed">
               While pursuing my university education, my entrepreneurial spirit continued to grow. During the COVID-19 pandemic in 2020, I expanded my skill set by transitioning into footwear production, gaining valuable experience in fashion craftsmanship and business development.
In 2022, during my National Youth Service Corps (NYSC) year, I returned to further upgrade my sewing skills and deepen my knowledge of fashion design. This investment in personal and professional growth led to the launch of my  fashion brand Precious Executive Wear.
              </p>
              <p className="leading-relaxed">
            My passion lies in creating elegant, professional, and confidence boosting outfits for corporate women. Through my brand, I am committed to helping women look polished, feel empowered, and express their individuality through well crafted executive wear
              </p>
              <p className="leading-relaxed">
               My journey reflects resilience, continuous learning, and a dedication to excellence as I work towards building a recognized fashion brand that inspires and serves women across different industries.
Today, alongside my career as an Internal Auditor, I continue to pursue my passion for fashion, combining professionalism, creativity, and entrepreneurship to make a meaningful impact in the lives of corporate women.
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
