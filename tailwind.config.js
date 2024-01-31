/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          50: "#fbffe4",
          100: "#f5ffc4",
          200: "#eaff90",
          300: "#d8ff50",
          400: "#caff33",
          500: "#a4e600",
          600: "#7fb800",
          700: "#608b00",
          800: "#4c6d07",
          900: "#415c0b",
          950: "#203400",
        },
        gray: {
          200: "#BFBFBF",
          300: "#B3B3B3",
          400: "#98989A",
          500: "#656567",
          600: "#59595A",
          700: "#4C4C4D",
          800: "#333333",
          900: "#262626",
          950: "#1C1C1C",
        },
      },
      fontFamily: {
        lexend: ['"Lexend"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
