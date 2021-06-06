const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }]
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: 'index.html',
  }),
  ],
}