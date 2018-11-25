var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: './js/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
