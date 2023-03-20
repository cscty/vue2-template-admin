const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 设置node环境变量
const setEnv = require("./src/utils/setEnv");
setEnv(path.resolve(__dirname, "./.env.production"));

module.exports = () => {
  return merge(common, {
    mode: "production",
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],
    module: {
      rules: [
        { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      ],
    },
  });
};
