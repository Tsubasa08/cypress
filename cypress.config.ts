import { defineConfig } from "cypress";
const webpackConfig = require("./webpack.cypress.js");

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: webpackConfig,
    },
  },
});
