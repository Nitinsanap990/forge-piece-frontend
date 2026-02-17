import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        forge: {
          bg: '#2a2a2a',
          surface: '#333333',
          card: '#3a3a3a',
          dark: '#222222',
          grey: '#999999',
          lightGrey: '#c0c0c0',
          bone: '#3a3a3a',
          red: '#c0c0c0',
          'red-hover': '#a8a8a8',
          accent: '#c0c0c0',
          'accent-hover': '#a8a8a8',
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #2a2a2a, #333333)',
      },
      animation: {
        'reveal': 'reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config

