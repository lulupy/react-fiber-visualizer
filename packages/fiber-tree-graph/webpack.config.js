const path = require('path');

const entry = path.join(__dirname, './src/index.js')

module.exports = {
  mode: 'production',
  entry: {
    'fiber-tree-graph': entry,
    'fiber-tree-graph.min': entry,
  },
  output: {
    filename: '[name].js',
    library: 'FiberTreeGraph',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
}