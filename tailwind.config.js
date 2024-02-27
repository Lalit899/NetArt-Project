/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'yellow': '#fff8aa',
        'red': '#ec3237',
      },
      screens: {
        'phone': '250px',
        // => @media (min-width: 250px) { ... }

        'tablet': '1024px',
        // => @media (min-width: 640px) { ... }

      },
    },
  },
  plugins: [],
}

