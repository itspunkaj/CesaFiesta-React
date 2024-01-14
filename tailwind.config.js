/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        firstColor : '#32127A',
        secondColor : '#fffaa0',
        thirdColor : '#6735d6',
        fourthColor : '#F1EAFF'
      }
    },
  },
  plugins: [],
}