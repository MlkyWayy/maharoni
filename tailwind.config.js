/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FFB33D",
        second: "#FCFFC7",
      },
      fontFamily: {
        amarilo: "amarillo",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
