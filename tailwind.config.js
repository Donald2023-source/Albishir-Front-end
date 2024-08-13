/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      color: {
        myPrimary: "#A27B5C",
        mySecondary: '#3F4E4F',
        Tertiary: '#DCD7C9'
      },
      daisyui:{
        themes: ["light", "dark", "cupcake"],
      }
    },
  },
  plugins: [require('daisyui')],
}