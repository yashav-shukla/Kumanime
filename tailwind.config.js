/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'colors': {
        'KUMANIME': '#2dc653',
        'bg-KUMANIME': '#141519',
        'bg-KUMANIME-2': '#0E1A22',
        'bg-KUMANIME-semi': '#15202B'
      },
      'fontFamily': {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

