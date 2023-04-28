/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainBackground": "#F1F4F9"
      },
      boxShadow: {
        "small": "0 4px 5px 0 rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [],
}
