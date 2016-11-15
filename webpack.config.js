var path = require('path'),
    srcPath = path.join(__dirname, 'src')

module.exports = {
  entry: path.join(srcPath, 'index'),
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  target: 'node',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  }
}
