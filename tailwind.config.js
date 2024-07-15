/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'logo-green': '#00ff12',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};