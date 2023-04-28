/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mainBackground": "#E5E5E5"
      },
      boxShadow: {
        "small": "0px 4px 5px #E9EDF3"
      }
    },
  },
  plugins: [],
}
