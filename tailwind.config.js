/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./app.html"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
