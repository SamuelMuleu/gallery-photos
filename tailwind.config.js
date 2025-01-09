/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        bg_principal:"#808080",
        bg_secondary:""
      }
    },
  },
  plugins: [],
}

