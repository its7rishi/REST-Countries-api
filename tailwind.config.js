/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        darkModeDarkBlue: 'hsl(209, 23%, 22%)',
        darkModeVeryDarkBlue: 'hsl(207, 26%, 17%)',
        lightModeVeryDarkBlue: 'hsl(200, 15%, 8%)',
        lightModeDarkGray: 'hsl(0, 0%, 52%)',
        lightModeVeryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
