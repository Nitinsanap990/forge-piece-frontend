import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        forge: {
          // These colors are defined in globals.css
          // Change them there to update the entire website theme
          bg: 'var(--forge-bg)',
          surface: 'var(--forge-surface)',
          card: 'var(--forge-card)',
          primary: 'var(--forge-primary)',
          secondary: 'var(--forge-secondary)',
          accent: 'var(--forge-accent)',      // Maps to primary
          grey: 'var(--forge-grey)',          // Maps to secondary
          dark: 'var(--forge-dark)',          // Maps to primary
          text: 'var(--forge-text)',
        },
      },
    },
  },
  plugins: [],
}
export default config
