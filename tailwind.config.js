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
        // Nueva paleta inspirada en las referencias (verde bosque + dorado + crema)
        "brand-primary": "#2F5847",      // Verde bosque oscuro (principal)
        "brand-bg": "#FAF7F2",           // Crema ultra claro (fondo general)
        "brand-bg-soft": "#F5F1EB",      // Beige suave (fondos alternados)
        "brand-text": "#1F1F1F",         // Negro carbón (texto principal)
        "brand-text-muted": "#6B6B6B",   // Gris oscuro (texto secundario)
        "brand-cta": "#C9985B",          // Dorado arena (botones y acentos)
        "brand-cta-hover": "#A67C48",    // Dorado más oscuro (hover)
        "brand-accent": "#5A8B76",       // Verde medio (acentos suaves)
        "brand-dark": "#1E3A2F",         // Verde muy oscuro (fondos hero/footer)
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
