/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "dynamic": "repeat(auto-fill, minmax(400px, 1fr))",
      },
      height :  {
        "main-height": "calc(100vh - 5rem)",
        "header-height": "5rem"
      }
    },
  },
  plugins: [],
};
