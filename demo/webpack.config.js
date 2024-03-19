const {AureliaPlugin}      = require('aurelia-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {resolve}            = require('path');

module.exports = function() {
  return {
    entry: {
      app: ['aurelia-bootstrapper']
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    mode: 'development',
    output: {
      path: 'assets',
      filename: 'bundle.js',
    },
    plugins: [
      new AureliaPlugin(),
      new MiniCssExtractPlugin({filename: 'bundle.css'})
    ],
    resolve: {
      extensions: ['.js'],
      modules: [
        resolve(__dirname, './'),
        resolve(__dirname, '../dist'),
        resolve(__dirname, '../node_modules')
      ]
    },
  };
};
