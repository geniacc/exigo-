/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        exigo: {
          purple: '#4f2876', // Deep core brand purple
          magenta: '#983d97', // Middle gradient accent magenta
          maroon: '#8c1b52', // Darker accent maroon
          cyan: '#23b3c8', // Electric clean cyan
          blue: '#39aad6', // Core gradient slate blue
          darkGrey: '#424143', // Professional neutral dark font/grey
        }
      },
    },
  },
  plugins: [],
}