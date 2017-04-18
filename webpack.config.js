const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'inline-source-map',
  entry: {
    'app' : [
      'react-hot-loader/patch',
      './App.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            'es2017',
            'es2016',
            "stage-0",
            "react"
          ],
          plugins:[
            'react-hot-loader/babel'
          ]
        }
      }]
    },
    {
      test: /\.scss$/,
      include: /node_modules/,
      loader: extractCSS.extract(['css-loader','sass-loader'])
      /*use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]*/
    }]
  }, // End : module
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    /*new webpack.ProvidePlugin({
      'Promise': 'bluebird'
    }),*/
    extractCSS,
  ],
  resolve: {
    alias: {
      components : path.resolve(__dirname, 'src/components'),
      BaseComponent$ : path.resolve(__dirname, 'src/components/BaseComponent.js'),
      'views' : path.resolve(__dirname, 'src/views'),
      'modules' : path.resolve(__dirname, 'src/modules'),
      'services' : path.resolve(__dirname, 'src/services')
    }
  }
}

module.exports = config
