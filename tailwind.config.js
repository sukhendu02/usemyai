/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{html,js,jsx}",
    
  ],
  
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Fira Code', 'Inter'],
    },
   
    
  },
  plugins: [],
  darkMode: 'selector',
}

