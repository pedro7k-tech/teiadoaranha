/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: {
          red: '#E50914',
          'red-dark': '#B30710',
          'red-light': '#FF334B',
          black: '#0A0A0E',
          'black-card': '#13131A',
          'black-subtle': '#1B1B26',
          blue: '#0070F3',
          'blue-cyan': '#00E5FF',
          yellow: '#FFD700',
        }
      },
      fontFamily: {
        heading: ['"Montserrat"', '"Impact"', '"Arial Black"', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'web-shoot': 'webShoot 1.2s cubic-bezier(0.25, 1, 0.5, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'badge-bounce': 'badgeBounce 2s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 25px rgba(229, 9, 20, 0.6), 0 0 50px rgba(229, 9, 20, 0.3)' },
          '50%': { boxShadow: '0 0 45px rgba(255, 51, 75, 0.9), 0 0 80px rgba(229, 9, 20, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        webShoot: {
          '0%': { transform: 'scaleX(0.2) scaleY(0.6)', opacity: '0.2' },
          '50%': { transform: 'scaleX(1) scaleY(1)', opacity: '1' },
          '100%': { transform: 'scaleX(1.05) scaleY(0.9)', opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        badgeBounce: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
