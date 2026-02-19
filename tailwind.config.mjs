/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#233559',
        'brand-red': '#be2431',
        'brand-blue': '#009acd',
        'brand-purple': '#a05ebb',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        cursive: ['Waiting for the Sunrise', 'cursive'],
      },
    },
  },
  plugins: [],
};
