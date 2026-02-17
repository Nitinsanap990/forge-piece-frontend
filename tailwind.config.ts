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
          dark: '#0a0a0a',
          darker: '#050505',
          teal: '#00d9ff',
          magenta: '#ff00ff',
          purple: '#8b00ff',
          gold: '#ffd700',
          silver: '#c0c0c0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyberpunk': 'linear-gradient(135deg, #00d9ff 0%, #ff00ff 50%, #8b00ff 100%)',
        'forge-glow': 'radial-gradient(ellipse at center, rgba(0, 217, 255, 0.3) 0%, transparent 70%)',
        'holographic': 'repeating-linear-gradient(0deg, rgba(0, 217, 255, 0.1) 0px, rgba(0, 217, 255, 0.1) 1px, transparent 1px, transparent 2px)',
      },
      animation: {
        'glitch': 'glitch 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'spark': 'spark 1.5s ease-out infinite',
        'scanline': 'scanline 10s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff' },
          '100%': { textShadow: '0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spark: {
          '0%, 100%': { opacity: '0', transform: 'translateY(0) scale(0.5)' },
          '50%': { opacity: '1', transform: 'translateY(-10px) scale(1)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
