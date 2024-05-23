/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        infographic: {
          "primary-green": "#486564",
          "secondary-green": "#D2E5DF",
        },
      },
    },
  },
  plugins: [],
};
