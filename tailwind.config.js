/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37", // Gold
          dark: "#B8860B", // Dark gold
          light: "#F5DEB3", // Light gold
        },
        secondary: {
          DEFAULT: "#8B0000", // Deep red
          dark: "#660000", // Darker red
          light: "#CD5C5C", // Lighter red
        },
        dark: {
          DEFAULT: "#121212", // Near black
          light: "#1E1E1E", // Dark gray
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
}