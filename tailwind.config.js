/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      /**
       * The palette maps to CSS variables defined in src/index.css so the
       * entire brand can be re-themed from one place. See `:root` there.
       */
      colors: {
        canvas: 'rgb(var(--color-canvas) / <alpha-value>)', // off-white
        cream: 'rgb(var(--color-cream) / <alpha-value>)', // soft cream surface
        beige: 'rgb(var(--color-beige) / <alpha-value>)', // warm beige
        sand: 'rgb(var(--color-sand) / <alpha-value>)', // muted sand line
        ink: 'rgb(var(--color-ink) / <alpha-value>)', // charcoal black
        muted: 'rgb(var(--color-muted) / <alpha-value>)', // muted text
        gold: 'rgb(var(--color-gold) / <alpha-value>)', // antique gold accent
        'gold-deep': 'rgb(var(--color-gold-deep) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Playfair Display Variable"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Editorial type scale
        'display-xl': ['clamp(3rem, 11vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 7vw, 6rem)', { lineHeight: '0.96', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.6rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        eyebrow: '0.32em',
        wide: '0.18em',
      },
      maxWidth: {
        container: '88rem',
        prose: '42rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        shimmer: 'shimmer 1.6s infinite',
      },
    },
  },
  plugins: [],
};
