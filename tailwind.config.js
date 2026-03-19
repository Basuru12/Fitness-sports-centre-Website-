/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        gold: 'var(--color-gold)',
        charcoal: 'var(--color-charcoal)',
        ink: 'var(--color-ink)',
        'hero-text': 'var(--color-hero-text)',
        'cta-pill': 'var(--color-cta-pill-bg)',
        'cta-pill-ink': 'var(--color-cta-pill-text)',
        'surface-input': 'var(--color-surface-input)',
        muted: 'var(--color-text-muted)',
        'success-bg': 'var(--color-success-bg)',
        'success-text': 'var(--color-success-text)',
        'success-border': 'var(--color-success-border)',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
