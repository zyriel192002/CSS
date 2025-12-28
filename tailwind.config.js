/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        darkred: {
          DEFAULT: '#7f1d1d',
          light: '#dc2626',
          dark: '#450a0a',
        },
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
