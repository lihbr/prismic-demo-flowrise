/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,vue}',
    './slices/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito Sans Variable', 'sans-serif'],
        display: ['Nunito Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
