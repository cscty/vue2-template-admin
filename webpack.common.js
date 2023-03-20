const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: {
    main: {
      import: "./src/main.js",
    },
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      { test: /\.(png|svg|jpg|jpeg|gif)$/, type: "asset/resource" },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, type: "asset/resource" },
      { test: /\.vue$/, use: ["vue-loader"] },
      { test: /\.js$/, use: ["babel-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
