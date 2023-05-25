/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      'nunito':'Nunito'
    },
    screens: {
      'first':'520px',
      'second':'720px',
      'third':'920px'
   
      
    },
    extend: {
      height: {
        'container': '700px',
        'searchBox': "50px",
      },
      fontSize:{
        'small':'13px',
        'small2':'18px',
        'medium':'23px',
        'large':'30px'
      }
    },
   
  },
  plugins: [],
}

