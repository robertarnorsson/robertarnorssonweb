const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.ttf',
    './style/**/*.{html,js}',
    './scripts/**/*.{html,js}',
    './404.html',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      cooper: ["CooperHewitt", "sans-serif"],
    },
    extend: {
      colors: {
        'primary': colors.slate,
        'accent': colors.indigo,
        'text': colors.gray,
        'text-dark': colors.slate[950],
        'text-light': colors.slate[50],
        'text-accent': colors.gray[500],
        'primary-dark': colors.slate[950],
        'primary-light': colors.slate[50],
        'accent-dark': colors.indigo[400],
        'accent-light': colors.indigo[600],
        'hover': colors.gray[400],
      },
      fontSize: {
        '10xl': ['9rem', '1'],
        '11xl': ['10rem', '1'],
        '12xl': ['12rem', '1'],
      },
    },
  },
  plugins: [],
}

