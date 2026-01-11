/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#2EA898",
        "brand-bg": "#FFF9F0",
        "brand-bg-soft": "#F4E4CF",
        "brand-text": "#1E1B16",
        "brand-text-muted": "#5A4B3F",
        "brand-cta": "#CC8A3B",
        "brand-cta-hover": "#A56621",
        "brand-accent": "#E2C278",
      },
      fontFamily: {
        youngsans: ["Young Sans", "serif"],
        lemons: ["Lemons Sans", "sans-serif"],
        briklace: ["Briklace Grotesque", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: [],
}
