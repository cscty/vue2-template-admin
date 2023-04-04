const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const packageName = require('./package.json').name
const { ModuleFederationPlugin } = require('webpack').container
module.exports = {
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  entry: {
    vue2: './src/main.js',
  },
  output: {
    clean: true,
    library: `${packageName}-[name]`,
    libraryTarget: 'umd',
    // webpack5 jsonpFunction 改成了 chunkLoadingGlobal
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      { test: /\.(png|svg|jpg|jpeg|gif|webp)$/, type: 'asset/resource' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, type: 'asset/resource' },
      { test: /\.vue$/, use: ['vue-loader'] },
      { test: /\.js$/, use: ['babel-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: 'vue2',
      filename: 'vue2.js',
      exposes: {
        './vue2': './src/main.js',
      },
    }),
  ],
  optimization: {
    splitChunks: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.vue', '.css', '.less'],
  },
}
