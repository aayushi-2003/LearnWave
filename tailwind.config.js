/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary-blue': '#1469f1',
        'secondary-blue': '#264DE4',
      },
      fontFamily:{
        primary: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

