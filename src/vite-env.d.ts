/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_PROVIDER: 'formspree' | 'emailjs' | 'demo';
  readonly VITE_FORMSPREE_ENDPOINT: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// @fontsource packages ship CSS as their entry; declare them for the type-checker.
declare module '@fontsource-variable/inter';
declare module '@fontsource-variable/playfair-display';
