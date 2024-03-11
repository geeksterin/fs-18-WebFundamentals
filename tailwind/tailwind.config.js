/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1100px',
        // => @media (min-width: 1440px) { ... }

        'xl': '1280px',

        '2xl': '1536px',
      },
    }
  }