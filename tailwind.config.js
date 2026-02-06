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
        "brand-primary": "#2D5A27", // Rich Forest Green
        "brand-bg": "#FAF9F6",      // Bone White (Clean & Classy)
        "brand-bg-soft": "#F0EDE7", // Soft Sand
        "brand-text": "#1A202C",    // Deep Charcoal
        "brand-text-muted": "#718096",
        "brand-cta": "#4682B4",     // Steel Blue (Coastal)
        "brand-cta-hover": "#36648B",
        "brand-accent": "#A3B18A",  // Sage Green
        "brand-dark": "#132A13",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Instrument Serif", "serif"],
        display: ["Instrument Serif", "serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};
