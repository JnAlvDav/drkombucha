/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-cream": "#FFF7EB",
        "brand-gold": "#D4A85F",
        "brand-dark": "#1A120B",
        "brand-green": "#3A5F3A"
      },
      fontFamily: {
        young: ["'Young Serif'", "serif"],
        tenor: ["'Tenor Sans'", "sans-serif"],
        bricolage: ["'Bricolage Grotesque'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
