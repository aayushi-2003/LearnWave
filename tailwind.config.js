/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'primary-blue': '#11009E',
        'secondary-blue': '#0578e5',
        'primary-pink': '#6b62fe',
        'secondary-pink': '#D5B9FA',
      },
      fontFamily:{
        primary: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

