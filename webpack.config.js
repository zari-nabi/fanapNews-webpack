const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js'
  },

  devServer: {
    port: 3030,
    historyApiFallback: true,
    watchContentBase: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg)$/i,
        loader: "file-loader",
    },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
}