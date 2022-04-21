const path = require("path");

module.exports = {
  mode: "development",
  //   devtools: "inline-source-map",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
