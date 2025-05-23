/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#1B3C8D',
          800: '#162F6E',
          900: '#112450',
        },
        orange: {
          500: '#FF6B38',
          600: '#FF5419',
          700: '#E64816',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      transitionDuration: {
        '5000': '5000ms',
      },
    },
  },
  plugins: [],
};