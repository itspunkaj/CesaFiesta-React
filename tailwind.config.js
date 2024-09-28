/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        firstColor : '#8d7d72',
        secondColor : '#c7ebf2',
        thirdColor : '#cec1a8',
        fourthColor : '#F1EAFF',
        fifthColor: '#438af6',
        sixthColor:'#f3efe8'
      },
      fontFamily:{
        sans:['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}