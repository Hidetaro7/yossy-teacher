const typography = require("@tailwindcss/typography");
const jumpuUi = require("@jumpu-ui/tailwindcss");

/** @type {import('tailwindcss/types').Config} */
module.exports = {
  content: ["src/**/*.js", "src/**/*.njk", "src/**/*.md"],
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "1rem",
          lg: "1rem",
          xl: "1rem",
        },
      },
    },
  },
  plugins: [typography, ...jumpuUi],
};
