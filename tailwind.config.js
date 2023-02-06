/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        inView: {
          "0%": { opacity: 0 },
          "80%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        inView: "inView 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
