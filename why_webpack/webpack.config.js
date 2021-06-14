/*
 * @Files:
 * @Version: 1.0
 * @Author: jiang.liu
 * @Date: 2021-06-14 21:41:00
 * @LastEditors: jiang.liu
 * @LastEditTime: 2021-06-14 23:16:31
 */

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "development",
  // 入口
  entry: "./src/index.js",
  // entry: {
  //   main: './src/index.js',
  //   sub: './src/index.js'
  // },
  // 出口
  output: {
    // publicPath: "http://cdn.xxx.com/",
    publicPath: "./",
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].js"
    filename: "main.js"
  },
  // loader
  module: {
    // 处理图片
    rules: [
      {
        test: /.(jpg|png|gif)$/,
        use: {
          // loader: 'file-loader',
          loader: 'url-loader',
          options: {
            // 占位符 placeholder
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 2048
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}