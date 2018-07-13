const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist/js'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};