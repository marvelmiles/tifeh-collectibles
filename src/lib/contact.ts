import { siteConfig } from "@/config/site";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot field — must stay empty for a human submission. */
  company?: string;
}

const STORAGE_KEY = "tifeh-contact-submissions";

/**
 * Persist a lightweight record of each submission locally. This is a
 * placeholder for a real datastore/CRM — swap `logSubmission` for an API
 * call (Supabase, Airtable, your backend…) when you scale.
 */
function logSubmission(payload: ContactPayload) {
  try {
    const existing = JSON.parse(
      localStorage.getItem(STORAGE_KEY) ?? "[]",
    ) as unknown[];
    existing.push({ ...payload, at: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-50)));
  } catch {
    /* storage unavailable — ignore */
  }
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

async function sendViaFormspree(payload: ContactPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  if (!endpoint) throw new Error("Formspree endpoint is not configured.");
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      _subject: payload.subject,
      message: payload.message,
    }),
  });
  if (!res.ok) throw new Error("Formspree rejected the submission.");
}

async function sendViaEmailJs(payload: ContactPayload): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS is not fully configured.");
  }

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: payload.name,
        reply_to: payload.email,
        title: payload.subject,
        message: payload.message,
        email: siteConfig.email,
      },
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(
      `EmailJS rejected the submission (${res.status})${detail ? `: ${detail}` : ""}`,
    );
  }
}

/**
 * Sends the contact message using whichever provider is configured via
 * VITE_FORM_PROVIDER. Always logs the submission locally first.
 */
export async function sendContactMessage(
  payload: ContactPayload,
): Promise<void> {
  // Spam guard: silently succeed if the honeypot is filled.
  if (payload.company && payload.company.trim() !== "") {
    await delay(600);
    return;
  }

  logSubmission(payload);

  const provider = import.meta.env.VITE_FORM_PROVIDER ?? "demo";
  switch (provider) {
    case "formspree":
      return sendViaFormspree(payload);
    case "emailjs":
      return sendViaEmailJs(payload);
    default:
      // Demo mode — simulate a network round-trip, deliver nothing.
      await delay(1100);
      return;
  }
}
