const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

module.exports = withSass(
  withImages({
    env: {
      BASE_URL: "https://staging-api.pythagoras.coffee",
    },
  })
);
