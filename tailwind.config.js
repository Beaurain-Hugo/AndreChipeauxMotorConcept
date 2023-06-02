/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      "fontFamily":{
        "cabin": "Cabin",
        "cinzel": "Cinzel",
        "bona-nova": "Bona Nova",
      },
      "colors": {
        "Extended/blue-gray/750": "#2b2d42"
       },
    },
  },
  plugins: [require("daisyui")],
}

