/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'780px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        brightRed:'hsl(12, 88%, 59%)', brightRedLight: 'hsl(12, 88%, 69%)', 
        darkBlue:' hsl(228, 39%, 23%)', darkGrayishBlue: 'hsl(227, 12%, 61%)', 
        veryDarkBlue: 'hsl(233, 12%, 13%)', veryPaleRed: 'hsl(13, 100%, 96%)', veryLightGray: 'hsl(8, 0%, 98%)',
      }
    },
  },
  plugins: [require("daisyui"),('flowbite/plugin')],
  darkMode:"class"
}
