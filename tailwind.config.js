/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FFB33D",
        second: "#FCFFC7",
        coklat: "#D68200",
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
