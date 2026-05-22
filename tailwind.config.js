export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // blue-900
          light: '#3B82F6', // blue-500
          dark: '#1E40AF', // blue-800
        },
        secondary: {
          DEFAULT: '#F97316', // orange-500
          light: '#FB923C', // orange-400
          dark: '#EA580C', // orange-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
