/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-title": "#9a8c98",
        "postcard-else": "#4a4e69",
        "postcard-contents": "#9a8c98",
        "schedule-escape": "#c9ada7",
        "schedule-play": "#ada5ce",
      },
      boxShadow: {
        figma: "0 4px 4px 0px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
