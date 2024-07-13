/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        dosis: ["Dosis"],
        ubuntu: ["Ubuntu"],
        playwrite: ["Playwrite"],
        allura: ["Allura"],
      },
    },
  },
  plugins: [],
};
