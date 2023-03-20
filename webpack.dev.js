const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");
const webpack = require("webpack");
// 设置node环境变量
const setEnv = require("./src/utils/setEnv");
setEnv(path.resolve(__dirname, "./.env.development"));

module.exports = () => {
  return merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {},
    plugins: [
      // 将打包的文件某些字段替换
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
    ],
  });
};
