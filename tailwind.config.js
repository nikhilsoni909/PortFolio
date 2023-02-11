/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {

      screens: {

        "sm": "480px"
      },
      spacing: {
        "big": "43rem"
      },
    },

    fontFamily: {
      nunito: ['Nunito', 'sans-serif']
    },
  },
  plugins: [],
}
