/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'inkblot': {
          50: '#F9F9F8',
          100: '#ECEEEB',
          200: '#C5CBC6',
          300: '#9EA7A5',
          400: '#7B8787',
          500: '#636E71',
          600: '#4B555B',
          700: '#303841',
          800: '#2A2E39',
          900: '#242431',
        },
        'dynamic-black': {
          50: '#FAFAFA',
          100: '#EAEAEA',
          200: '#D6D6D6',
          300: '#B4B4B4',
          400: '#969696',
          500: '#787878',
          600: '#5A5A5A',
          700: '#3C3C3C',
          800: '#1E1E1E',
          900: '#1A1A1A',
        },
        'dark-tone': {
          50: '#D9D9D9',
          100: '#BFBFBF',
          200: '#8C8C8C',
          300: '#595959',
          400: '#3F3F3F',
          500: '#373737',
          600: '#2F2F2F',
          700: '#262626',
          800: '#1D1D1D',
          900: '#161616',
        }
        // ...
      },
    },
  },
  plugins: [],
}
