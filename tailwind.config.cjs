/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      Roboto: ['Roboto', "sans-serif"],
      Poppins:['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}