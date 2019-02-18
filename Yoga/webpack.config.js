"use strict";

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    // ,path: __dirname + '/dist/js'
    path: path.resolve(__dirname, 'public/js')
  },
  watch: true,
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
              ['@babel/preset-env', {
                  targets: {
                    // browsers: ['last 2 versions', 'ie >= 10']}}]]}}}]},/*
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                    ie: "10"
                }//,useBuiltIns: "usage"
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};