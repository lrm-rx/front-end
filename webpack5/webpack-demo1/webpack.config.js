const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");
const { CSPPlugin } = require("./plugins/test-plugin");
module.exports = {
  // mode: "development",
  mode: "production",
  // context: path.resolve(__dirname, "src"),
  // entry: ["./src/index.js", "./src/test.js"],
  resolveLoader: {
    alias: {
      loader1: path.resolve(__dirname, "./loader/loader1.js"),
    },
  },
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
    // filename: "test-demo.js",
    // chunkFilename: "asset_[id].js",
    // library: "my_library",
    // library: {
    //   name: "my_library",
    //   type: "var", // 必填
    // },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      // 选项
                      /**
                       * 可以在package.json中添加
                       *  "browserslist": [
                       *  "last 10 Chrome versions",
                       *  "last 5 Firefox versions",
                       *  "Safari >= 6",
                       *  "ie > 8"
                       * ]
                       */
                      // browsers: [
                      //   "last 10 Chrome versions",
                      //   "last 5 Firefox versions",
                      //   "Safari >= 6",
                      //   "ie > 8",
                      // ],
                    },
                  ],
                ],
              },
            },
          },
        ],
        // use: ["loader1", "css-loader"],
        // use: [
        //   {
        //     loader: "loader1",
        //     options: {
        //       attributes: {
        //         name: "loader1",
        //       },
        //     },
        //   },
        //   "css-loader",
        // ],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        // use: ["css-loader", "loader1", "sass-loader"],
        // use: [
        //   {
        //     loader: "loader1",
        //     options: {
        //       attributes: {
        //         name: "loader1",
        //       },
        //     },
        //   },
        //   "css-loader",
        //   "sass-loader",
        // ],
      },
      // {
      //   test: /inline\.*\.html/,
      //   type: "asset/source",
      // },
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
    new CSPPlugin({
      "default-src": ["self", "www.baidu.com"],
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        // test: /index\.css$/,
        exclude: /test/,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      minChunks: 1,
    },
  },
  // devtool: "source-map",
  externals: {
    jquery1: "jQuery",
  },
  devServer: {
    client: {
      // 设置用户端展示相关
      overlay: false,
    },
    compress: true, // 是否启用gzip
    hot: "only",
    // open: true,
    port: 9001,
    proxy: {
      // "/api": "http://localhost:3000/",
      "/api/*": {
        target: "http://localhost:3000/",
        bypass: (req, res, proxyOptions) => {
          if (req.url.indexOf("test2") !== -1) {
            return "/";
          }
        },
        pathRewrite: {
          "^/api": "",
        },
      },
      // server: "https",
      // static: ["assets"],
      static: {
        directory: path.resolve(__dirname, "assets"),
        // publicPath: "/static_txt",
      },
    },
  },
};
