/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f8f4',
          100: '#e1efe6',
          200: '#c5e0d0',
          300: '#9cc9b0',
          400: '#6ea98b',
          500: '#488c6c',
          600: '#347055',
          700: '#2a5a45',
          800: '#234839',
          900: '#1b3b2b',
          950: '#0d2118',
        },
        wood: {
          50: '#fdfbf7',
          100: '#f7f2e9',
          200: '#eee2d0',
          300: '#e1cbab',
          400: '#d1ab80',
          500: '#c28e5c',
          600: '#b2754d',
          700: '#945c41',
          800: '#784b39',
          900: '#623f31',
          950: '#352019',
        },
        dniester: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'warm': '0 10px 30px -10px rgba(139, 90, 43, 0.15)',
        'glow': '0 0 25px rgba(217, 119, 6, 0.25)',
      }
    },
  },
  plugins: [],
}
