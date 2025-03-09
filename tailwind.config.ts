/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rajdhani', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
      },
      colors: {
        // Cyberpunk-inspired color palette
        'cyber-black': '#0d0e19',
        'cyber-blue': {
          100: '#a4fdfe',
          200: '#7efdfe',
          300: '#56fdfe',
          400: '#00fefb',
          500: '#00d2d0',
          600: '#00a6a3',
          700: '#007977',
          800: '#004c4a',
          900: '#00201e',
        },
        'cyber-pink': {
          100: '#ffc0db',
          200: '#ff91c1',
          300: '#ff61a6',
          400: '#ff368c',
          500: '#ff0772',
          600: '#cc0058',
          700: '#990042',
          800: '#66002c',
          900: '#330016',
        },
        'cyber-yellow': '#f3e600',
        'cyber-purple': '#7700a6',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scanner': 'scanner 3s ease-in-out infinite',
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '7%': { transform: 'translateX(-5px)' },
          '10%': { transform: 'translateX(5px)' },
          '27%': { transform: 'translateX(-3px)' },
          '30%': { transform: 'translateX(3px)' },
          '64%': { transform: 'translateX(-2px)' },
          '67%': { transform: 'translateX(2px)' },
        },
        scanner: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { transform: 'translateY(100%)', opacity: '0.8' },
        },
      },
      backgroundImage: {
        'cyber-grid': "url('/images/grid.svg')",
        'cyber-gradient': "linear-gradient(to right, #00fefb, #ff0772)",
      },
    },
  },
  plugins: [ require('@tailwindcss/forms') ],
}
