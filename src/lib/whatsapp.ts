import { siteConfig } from '@/config/site';

/** Builds a wa.me deep link with the message pre-filled for the customer. */
export const buildWhatsAppLink = (message: string): string =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

export const enquiryMessage = (piece: string, colourway: string): string =>
  `Hello ${siteConfig.name}, I would like to order the ${piece} in ${colourway}. Please share the available sizes and how to pay.`;

export const generalEnquiryMessage = `Hello ${siteConfig.name}, I'd love to enquire about a commission.`;
