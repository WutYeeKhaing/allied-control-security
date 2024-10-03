/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      textColor: {
        'custom-gray': 'rgba(170, 170, 170, 1)', // Custom RGBA gray color
      },
      colors: {
        'custom-yellow': 'rgba(230, 184, 11, 0.2)', // Add your custom color
      },
      screens: {
        'custom900': '1040px', // Add a custom breakpoint at 900px
      },
    },
  },
  plugins: [],
}

