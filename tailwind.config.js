/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {

      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
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
