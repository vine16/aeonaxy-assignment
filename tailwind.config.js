/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F6F0",
        yellow: {
          200: "#F9DEB3",
          400: "#F5C67D",
          300: "#F7E9C7",
        },
        red: {
          200: "#D78995",
          400: "#EA9AA3",
        },
        amber: {
          200: "#F0BD69",
        },
      },
      width: {
        42: "10.5rem",
      },
    },
  },
  plugins: [],
};
