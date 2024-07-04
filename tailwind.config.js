/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-body-blue": "#0E2954",
        "dark-sec-blue": "#1F6E8C",
        "dark-ter-blue": "#84A7A1",
        "dark-element-hint": "#2E8A99",
      },
    },
  },
  plugins: [],
};
