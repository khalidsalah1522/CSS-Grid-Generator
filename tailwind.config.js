/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "300px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
