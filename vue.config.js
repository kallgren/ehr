const path = require("path");

module.exports = {
  baseUrl: process.env.NODE_ENV === "production"
    ? "/ehr/"
    : "/",
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, "src/assets/styl/variables.styl"),
          path.resolve(__dirname, "src/assets/styl/mixins.styl")
        ]
      }
    }
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
