'use strict';

var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/browser/react/index.jsx',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};