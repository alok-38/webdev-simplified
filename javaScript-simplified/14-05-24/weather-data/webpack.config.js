const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./app.js", // Specify the entry point relative to the root directory
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Specify the output path relative to the root directory
  },
  plugins: [new Dotenv()],
};
