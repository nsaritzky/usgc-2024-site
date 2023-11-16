const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // Path to your HTML files
    "./src/**/*.njk", // Path to Nunjucks templates
    "./src/**/*.md", // Path to Markdown files, if you're using them
    // Add other template paths as necessary
  ],
  theme: {
    colors: {
      ...colors,
      agablue: "#0147ad",
      agagreen: "#008749",
      agayellow: "#c39100",
      agared: "#c33500",
    },
    extend: {},
  },
  plugins: [],
};
