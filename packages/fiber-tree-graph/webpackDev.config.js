const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = path.join(__dirname, './example');

module.exports = {
  mode: 'development',
  entry: path.join(appPath, './src/index.js'),
  output: {
    path: path.join(appPath, './dist'),
    filename: 'build.js',
  },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    template: path.join(appPath, './public/index.html'),
  })],
  devServer: {
    static: {
      directory: path.join(appPath, './dist'),
    },
    compress: true,
    port: 9001,
  },
  
}