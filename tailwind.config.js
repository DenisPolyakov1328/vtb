/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#5162B6',
        'orange': '#E75212'
      },
      maxHeight: {
        '530': '33.125rem'
      }
    },
  },
  plugins: [],
}

