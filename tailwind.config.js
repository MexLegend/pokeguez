/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pocket-monk': ['Pocket Monk', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'sans-serif'],
      },
      colors: {
        "primary-color": "#ce17f4",
        "dark-blue": "#1b0c35",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

