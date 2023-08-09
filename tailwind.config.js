/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightWhite: "#f1f1f1",
        primary: "text-blue-600",
      },
    },
  },
  plugins: [],
};
