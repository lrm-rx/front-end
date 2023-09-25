const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  // context: path.resolve(__dirname, "src"),
  // entry: ["./src/index.js", "./src/test.js"],
  entry: {
    index: {
      import: "./src/index.js",
      // dependOn: ["react-vendor", "test"],
    },
    // "react-vendor": {
    //   import: ["react", "redux"],
    // },
    // test: {
    //   import: "./src/test.js",
    //   filename: "app.js",
    // },
  },
  output: {
    path: path.resolve(__dirname, "build"),
    // publicPath: "https://a.b.c/assets",
    filename: "test-demo.js",
    chunkFilename: "asset_[id].js",
    // library: "my_library",
    library: {
      name: "my_library",
      type: "var", // 必填
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
  ],
};
