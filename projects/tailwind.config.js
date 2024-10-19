/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./boot/**/*.{html,js}"],
  theme: {
    extend: {},
    boxShadow:{
      boxx:"0 0 5px theme('colors.green.200'),0 0 10px theme('colors.green.900')"
    },
   
    
  },
  plugins: [],
}

