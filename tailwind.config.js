/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnightBlue': '#0C1021',
        'midnightWhite': '#E8F0FF',
        'midnightGray': '#949BA8',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1480px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1736px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}

