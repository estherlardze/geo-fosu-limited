/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue : '#0e86a4',
        orange: '#ff6600'
      },
      backgroundImage: {
        "office" : "url('/src/assets/images/OFFC.jpg')",
        "workers" : "url('/src/assets/images/WORKERS.jpg')",
        "work" : "url('/src/assets/images/WORK.jpg')",
        "retro" : "url('/src/assets/images/RETRO.png')",
      }
    },
  },
  plugins: [],
}

