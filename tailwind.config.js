/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#5162B6',
        'orange': '#E75212',
        'log-orange': '#F3723A',
        'gray': '#F5F5F5',
        'title-blue': '#7888B1',
        'descr-blue': '#606981',
        'gray-blue': '#6F7ECB',
        'bdr-gray': '#D4D7DF',
        'btn-gray': '#EEEEEE',
        'red-error': '#F36E6E'
      },
      maxHeight: {
        '530': '530px'
      },
      maxWidth: {
        '1440': '1440px',
      },
      minHeight: {
        '250': '250px'
      },
      fontSize: {
        '40': ['40px', '45px'],
      },
      width: {
        '102': '102.91px',
      },
      height: {
        '133': '133.66px',
      },
      borderRadius: {
        'elipse': '50%',
      }
    },
  },
  plugins: [],
}

