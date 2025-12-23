/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        income: "#34D399",
        expense: "#F87171",
        primary: "#60A5FA",
        bg: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
