/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-title": "#9a8c98",
        "postcard-else": "#4a4e69",
        "postcard-contents": "#9a8c98",
        "schedule-escape": "#c9ada7",
        "schedule-play": "#ada5ce",
        "22223b": "#22223b",
        "4a4e69": "#4a4e69",
        "9a8c98": "#9a8c98",
        c9ada7: "#c9ada7",
        f2e9e4: "#f2e9e4",

        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-600": "#4b5563",
      },
      boxShadow: {
        figma: "0 4px 4px 0px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
});
