const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack");
require('dotenv').config();


module.exports = {

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    // publicPath: 'http://localhost:3030',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({ template: './src/index.html' }),
    // new webpack.EnvironmentPlugin({ ...process.env }),

    new webpack.EnvironmentPlugin({
      NODE_ENV:'developement', 
      PUBLIC_URL:"http://localhost:3030"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    }),
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: './src/index.html',
        },
         {
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
              },
            }
          
      )
    ),
  ],
}

