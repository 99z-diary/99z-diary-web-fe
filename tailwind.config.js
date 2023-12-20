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
        "brown-100": "#ffe3e3",
        "brown-200": "#eac5c5",
        "brown-300": "#d5a7a7",
        "brown-400": "#c08989",
        "brown-500": "#b68080",
        "brown-600": "#ac7676",
        "brown-700": "#a26d6d",

        "purple-100": "#eaebf4",
        "purple-200": "#cbcbe5",
        "purple-300": "#a9aad3",
        "purple-400": "#8989c0",
        "purple-500": "#716eb2",
        "purple-600": "#5c54a8",
        "purple-700": "#554c9e",

        "sub-red": "#ff2c51",
        "sub-purple": "#6156f5",

        "gray-100": "#fefefe",
        "gray-200": "#fdfdfd",
        "gray-300": "#f7f8f9",
        "gray-400": "#e9ebee",
        "gray-500": "#c5c8ce",
        "gray-600": "#646f7c",
        "gray-700": "#374553",
        "gray-800": "#28323c",
        "gray-900": "#161d24",

        black: "#000000",
        white: "#ffffff",

        primary: "#374553",
        secondary: "#646f7c",
        placeholder: "#c5c8ce",

        "bg-base": "#f7f8f9",

        "border-999999": "#999999",
        "border-eeeeee": "#eeeeee",
      },
      boxShadow: {
        "figma-044": "0 4px 4px 0px rgba(0,0,0,0.25)",
        "figma-226": "2px 2px 6px 0px rgba(0,0,0,0.10)",
        "figma-666": "6px 6px 6px 0px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
});
