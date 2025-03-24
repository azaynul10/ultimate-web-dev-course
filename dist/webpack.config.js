const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Fixes mode warning
  entry: "./src/js/main.js", // Explicit entry point
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".json"], // Add file extensions to resolve
  },
};
