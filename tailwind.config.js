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
        '530': '530px'
      },
      maxWidth: {
        '1440': '1440px'
      },
      fontSize: {
        '40': ['40px', '45px'],
      }
    },
  },
  plugins: [],
}

