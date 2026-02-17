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
          black: '#000000',
          charcoal: '#171717',
          darkGrey: '#262626',
          grey: '#666666',
          lightGrey: '#E5E5E5',
          bone: '#f8f8f8',
          red: '#c41230',
          'red-hover': '#a00e27',
        },
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(to bottom, #ffffff, #f8f8f8)',
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
