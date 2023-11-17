const Image = require("@11ty/eleventy-img");
const { format } = require("date-fns");

module.exports = function (eleventyConfig) {
  // Copy `assets/` to `_site/assets/`
  // eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Watch CSS files for changes
  eleventyConfig.setServerOptions({
    watch: ["_site/assets/**/*.css"],
  });

  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByTag("post").reverse();
  });

  eleventyConfig.addFilter("dateReadable", function (date) {
    // Format the date to a readable format, e.g., "March 1, 2023"
    return format(new Date(date), "MMMM d, yyyy");
  });

  eleventyConfig.addNunjucksAsyncShortcode(
    "image",
    async function (src, alt, sizes = "100vw", additionalClasses = "") {
      let metadata = await Image(src, {
        widths: [300, 600, 1200],
        formats: ["avif", "jpeg"],
        outputDir: "./_site/assets/images/",
        urlPath: "/assets/images/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        class: additionalClasses,
      };

      // Generate HTML here...
      return Image.generateHTML(metadata, imageAttributes);
    },
  );

  return {
    dir: {
      input: "src", // Source files directory
      output: "_site", // Output directory
      includes: "_includes", // Includes directory for layouts/partials
      data: "_data", // Data directory for global data files
    },
  };
};