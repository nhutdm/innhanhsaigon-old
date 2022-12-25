/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        stack: {
          50: '#f0f8ec',
          100: '#e1f2d9',
          200: '#c2e4b4',
          300: '#a4d78e',
          400: '#86ca68',
          500: '#6abd45',
          600: '#539735',
          700: '#3e7128',
          800: '#294b1b',
          900: '#15260d',
        },
      },
    },
  },
  plugins: [],
}
