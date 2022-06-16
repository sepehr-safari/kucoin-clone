/** @type {import('tailwindcss').Config} */
const colors = require('./styles/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
