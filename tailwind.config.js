/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // dropShadow: {
      //   "3xl": "0 20px 13px rgba(245, 56, 56, 0.2)",
      // },
    },
    screens: {
      sm: "600px",
      md: "1025px",
      lg: "1700px",
    },
  },
  plugins: [],
};
