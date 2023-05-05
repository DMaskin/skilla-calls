/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      colors: {
        "mainBackground": "#F1F4F9",
        "textHeader": "#899CB1"
      },
      boxShadow: {
        "small": "0 4px 5px 0 rgba(0, 0, 0, 0.05)",
        "large": "4px 16px 50px rgba(129, 135, 163, 0.24);"
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}
