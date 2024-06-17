/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "text-base": "16px",
        "text-lg": "18px",
        "text-xl": "20px",
        "text-2xl": "24px",
        "text-4xl": "36px",
      },
      lineHeight: {
        "text-base": "24px",
        "text-lg": "28px",
        "text-xl": "28px",
        "text-2xl": "32px",
        "text-4xl": "40px",
      },
    },
  },
  plugins: [],
};
