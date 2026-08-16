import { motion } from 'framer-motion';
import { WhatsAppIcon } from '@/components/ui/icons/WhatsAppIcon';
import { buildWhatsAppLink, generalEnquiryMessage } from '@/lib/whatsapp';

export function WhatsAppButton() {
  const href = buildWhatsAppLink(generalEnquiryMessage);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 transition-transform hover:scale-105 sm:bottom-8 sm:left-8 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon />
    </motion.a>
  );
}
