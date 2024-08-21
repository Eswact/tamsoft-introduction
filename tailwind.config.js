/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#092635',
        'text': '#3B3A3A',
        'main': '#C32640',
        'second': '#545657',
        'third': '#F8D519',
        'main-shadow': '#C326405e',
        'second-shadow': '#5456575e',
        'third-shadow': '#F8D5195e',
      },
    },
    screens: {
      'full': {'max': '1919px'},
      '2xl': {'max': '1600px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1000px'},
      'md': {'max': '850px'},
      'sm': {'max': '650px'},
    }
  },
  plugins: [],
}