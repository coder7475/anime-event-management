/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display : "'Titillium Web', sans-serif",
      },
    },
    colors: {
      'white': '#FFF',
      'charcoal': '#264653',
      'persianGreen': '#2A9D8F',
      'saffron': '#E9C46A',
      'sandyBrown': '#F4A261',
      'burntSienna': '#E76F51',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}