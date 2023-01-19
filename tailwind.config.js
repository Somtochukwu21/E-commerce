/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      "main-image":
        "url('../assets/images/computer-laptop-macbook-coding.jpg')",
    },
    fontFamily: {
      std: ["Karla", "sans-serif"],
    },
  },
  plugins: [],
};
