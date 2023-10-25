/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue : '#32a4a8'
      },
      backgroundImage: {
        "header" : "url('/src/assets/header.jpg')",
      }
    },
  },
  plugins: [],
}

