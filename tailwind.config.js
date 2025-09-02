/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // 👈 enable class-based dark mode
  fontFamily: {
    display: ['Poppins', 'sans-serif'],
    body: ['Poppins', 'sans-serif'],
  },
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          text: '#111111',
        },
        dark: {
          bg: '#111111',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
