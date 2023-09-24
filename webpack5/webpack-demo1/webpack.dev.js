const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  // context: path.resolve(__dirname, "src"),
  // entry: ["./src/index.js", "./src/test.js"],
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: ["react-vendor", "test"],
    },
    "react-vendor": {
      import: ["react", "redux"],
    },
    test: {
      import: "./src/test.js",
      filename: "app.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "https://a.b.c/assets",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
