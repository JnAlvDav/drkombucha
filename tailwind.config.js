/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6fbf6',
          100: '#e6f6e8',
          200: '#cdefcf',
          300: '#a8e0a0',
          400: '#6fcd72',
          500: '#0f9d58',
          600: '#0e8c4f',
          700: '#0b7a45',
          800: '#095f35'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['"Playfair Display"', 'Georgia', 'serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem'
        }
      }
    }
  },
  plugins: []
}
