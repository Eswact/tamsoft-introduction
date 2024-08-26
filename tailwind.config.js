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
        'third': '#FAA550',
        'dark-shadow': '#0926355e',
        'main-shadow': '#C326405e',
        'second-shadow': '#5456575e',
        'third-shadow': '#FAA5505e',
        'main-light': '#C326401a'
      },
    },
    screens: {
      'full': {'max': '1919px'},
      '3xl': {'max': '1800px'},
      '2xl': {'max': '1600px'},
      'xl': {'max': '1280px'},
      'lg': {'max': '1000px'},
      'md': {'max': '850px'},
      'sm': {'max': '650px'},
    }
  },
  plugins: [],
}