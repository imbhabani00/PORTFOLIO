/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A2BE2",  // Bright purple (adjust to match)
        secondary: "#4B0082", // Dark purple
        background: "#0a0217", // Dark blackish background
        accent: "#A020F0",  // Lighter accent purple
        text: "#ffffff",  // White text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Modern sans-serif font
      },
      boxShadow: {
        glow: "0 0 15px rgba(138, 43, 226, 0.8)", // Purple glow effect
      },
      backgroundImage: {
        'grid-pattern': "url('/path-to-grid-pattern.svg')",
      },
    },
  },
  plugins: [],
};
