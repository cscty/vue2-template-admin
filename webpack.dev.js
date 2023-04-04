const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const webpack = require('webpack')
// 设置node环境变量
const setEnv = require('./src/utils/setEnv')
setEnv(path.resolve(__dirname, './.env.development'))

// 设置代理对象
const proxyConfig = {
  target: 'http://uat-manager.bilibili.co',
  changeOrigin: true,
  onProxyReq(proxyReq) {
    proxyReq.setHeader('Referer', 'http://uat-manager.bilibili.co')
    proxyReq.setHeader('Origin', 'http://uat-manager.bilibili.co')
  },
}

module.exports = () => {
  return merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      port: 5000,
      host: process.env.DEV_HOST || 'manager.bilibili.co',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        '/x/': proxyConfig,
      },
    },
    plugins: [
      // 将打包的文件某些字段替换
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env),
      }),
    ],
  })
}
