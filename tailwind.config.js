/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#07090f',
        surface: 'rgba(255,255,255,0.04)',
        purple: '#a78bfa',
        pink: '#f472b6',
        cyan: '#38bdf8',
        green: '#34d399',
        orange: '#fb923c',
        yellow: '#facc15',
      },
      fontFamily: {
        heading: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'rainbow-conic':
          'conic-gradient(from 0deg, #a78bfa, #f472b6, #38bdf8, #34d399, #facc15, #fb923c, #a78bfa)',
        'rainbow-linear':
          'linear-gradient(90deg, #a78bfa, #f472b6, #38bdf8, #34d399, #facc15, #fb923c, #a78bfa)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.45)',
        glow: '0 0 40px rgba(167,139,250,0.25)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out infinite 1.5s',
        shimmer: 'shimmer 6s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -30px) scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
