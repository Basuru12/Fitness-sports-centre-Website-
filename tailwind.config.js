/** @type {import('tailwindcss').Config} */
export default {
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
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
