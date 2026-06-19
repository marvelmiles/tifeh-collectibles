import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { TextReveal } from "@/components/ui/TextReveal";
import { photo, thumb } from "@/lib/images";
import { EASE_EDITORIAL } from "@/lib/motion";

export function ContactCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden"
    >
      {/* Background image */}
      <Image
        src={photo("1496747611176-843222e1e57c", { w: 1600, h: 900 })}
        thumb={thumb("1496747611176-843222e1e57c")}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-10 bg-ink/70" aria-hidden="true" />

      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center text-canvas sm:py-32">
        <motion.p
          className="eyebrow text-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Begin a commission
        </motion.p>

        <TextReveal
          as="h2"
          text="Let’s make something worth keeping."
          className="mt-5 max-w-3xl text-display-md font-medium"
        />

        <motion.p
          className="mt-6 max-w-xl text-canvas/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_EDITORIAL }}
        >
          Whether it’s a wedding, a boardroom or a runway, every piece starts
          with a conversation. Tell us what you’re dreaming of.
        </motion.p>

        <motion.div
          className="mt-9"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE_EDITORIAL }}
        >
          <LinkButton to="/contact" withArrow variant="solid">
            Get in touch
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
