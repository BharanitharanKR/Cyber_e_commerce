/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        darkPurple: "#4B2A6C", // ✅ Custom color for gradient
        lightGray: "#EDEDED",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to right, #4B2A6C, #000000)",
        blackGradient: "linear-gradient(135deg, #2E2E2E 0%, black 100%)", // ✅ Fixed
      },
      width: {
        1440: "1440px", // ✅ Custom width
      },
    },
  },
  plugins: [],
};
