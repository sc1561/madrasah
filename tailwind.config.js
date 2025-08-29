/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        omanRed: '#C8102E',
        omanGreen: '#007A3D',
        omanWhite: '#FFFFFF',
        omanDark: '#0B1C1F',
        omanSand: '#F6F3ED'
      }
    },
  },
  plugins: [],
}
