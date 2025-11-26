/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe7e0',
          300: '#d9d2c5',
          400: '#c4b8a8',
          500: '#b09f8c',
          600: '#9a8770',
          700: '#7f6d5a',
          800: '#6a5a4c',
          900: '#574b40',
        },
        ivory: {
          50: '#fefdfb',
          100: '#fefbf7',
          200: '#fdf6ed',
          300: '#fbeed9',
          400: '#f8e2c0',
          500: '#f5d4a3',
          600: '#e8b97a',
          700: '#d99d5a',
          800: '#b8814a',
          900: '#976a3f',
        },
        gold: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant', 'serif'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

