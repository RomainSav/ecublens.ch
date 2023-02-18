/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    container: {
      center: true,
      padding: "2rem"
    },

    fontFamily: {
      sans: "Poppins, sans-serif"
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
}
