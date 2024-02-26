/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate:{
        '360': '360deg'
      },
      opacity:{
        '0':'0'
      }
    },
  },
  plugins: [],
};
