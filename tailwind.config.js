/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: [ "Baskervville SC"],
        vibe:["Great Vibes"],
      },
    },
  },
  plugins: [],
}

