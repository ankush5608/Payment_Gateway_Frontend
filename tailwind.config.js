/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{html,js,jsx}"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '256':'90rem',
      },
      height:{
        '98':'26rem'
      }
    },
  },
  plugins: [],
}

