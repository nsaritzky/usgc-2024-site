const Image = require("@11ty/eleventy-img");

async function imageMetadata() {
  let metadata = await Image("src/assets/images/roseandboard.png", {
    widths: [300, 600, 900, 1200],
    formats: ["avif", "jpeg"],
    outputDir: "./_site/assets/images",
    urlPath: "/usgc-2024-site/assets/images",
  });

  return metadata;
}

module.exports = imageMetadata();
