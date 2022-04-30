const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: {
    'background': './src/background.js',
    'content-script': './src/content-script.js',
    'devtools': './src/devtools.js',
    'injected-script': './src/injected-script.js',
    'panel': './src/panel.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      // 注意是'"development"', 而不是"development"
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ],
}