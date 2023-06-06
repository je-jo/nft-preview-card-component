/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        'fem-soft-blue': 'hsl(215, 51%, 70%)',
        'fem-cyan': 'hsl(178, 100%, 50%)',
        'fem-vdk-blue-main': 'hsl(217, 54%, 11%)',
        'fem-vdk-blue-card': 'hsl(216, 50%, 16%)',
        'fem-vdk-blue-line': 'hsl(215, 32%, 27%)',
      },
    },
  },
  plugins: [],
}

