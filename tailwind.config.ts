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
          
          // Backgrounds
          bg: 'var(--forge-bg)',
          surface: 'var(--forge-surface)',
          card: 'var(--forge-card)',
          
          // Theme Colors
          primary: 'var(--forge-primary)',
          secondary: 'var(--forge-secondary)',
          
          // Text Colors
          'text-heading': 'var(--forge-text-heading)',
          'text-body': 'var(--forge-text-body)',
          'text-muted': 'var(--forge-text-muted)',
          'text-emphasis': 'var(--forge-text-emphasis)',
          'text-link': 'var(--forge-text-link)',
          'text-inverse': 'var(--forge-text-inverse)',
          'text-label': 'var(--forge-text-label)',
          
          // Legacy support
          accent: 'var(--forge-accent)',      // Maps to primary
          grey: 'var(--forge-grey)',          // Maps to secondary
          dark: 'var(--forge-dark)',          // Maps to primary
          text: 'var(--forge-text)',          // Maps to text-body
        },
      },
    },
  },
  plugins: [],
}
export default config
