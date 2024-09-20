/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust according to your file extensions
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        textColor: 'var(--text-color)',
        backgroundColor: 'var(--background-color)',
      },
    },
  },
  plugins: [],
}
