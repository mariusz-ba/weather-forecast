const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '../src/index.jsx')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '../src'),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@modules': path.resolve(__dirname, '../src/modules')
    }
  },
  devServer: {
    historyApiFallback: true
  }
}