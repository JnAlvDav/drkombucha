/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#2F5847",
        "brand-bg": "#FCF8F2",
        "brand-bg-soft": "#F5F1EB",
        "brand-text": "#1F1F1F",
        "brand-text-muted": "#6B6B6B",
        "brand-cta": "#C9985B",
        "brand-cta-hover": "#A67C48",
        "brand-accent": "#5A8B76",
        "brand-dark": "#1E3A2F",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        fraunces: ["Fraunces", "serif"],
        youngserif: ["Young Serif", "serif"],
        lora: ["Lora", "serif"],
        youngsans: ["Young Sans", "serif"],
        lemons: ["Lemons Sans", "sans-serif"],
        briklace: ["Briklace Grotesque", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
