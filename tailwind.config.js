/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '40%-60%': '40% 60%'
      },
      colors: {
        'brwhite': '#fdf6e3',
        'brblack': '#002b36',
        'black': '#073642',
      }
    },
  },
  plugins: [],
}