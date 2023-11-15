/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "violet-1": "#9B63FC",
        "violet-2": "#9A63FB",
        grey: "#A3A3A3",
        "grey-2": "#615C5C",
        green: "#2BB272",
        "bg-grey": " #FAFAFA",
        green: "#2BB272",
        "card-bg": "#2F3046",
      },
      boxShadow: {
        "footer-menu": "0px 0px 4px 0px rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [],
};
