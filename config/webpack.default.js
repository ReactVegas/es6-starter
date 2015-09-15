/* eslint-env node */

import {resolve} from 'path';

export default {
  entry: [
    './src/main'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: [
      resolve(__dirname, '..', 'src')
    ]
  },
  devServer: {
    contentBase: './public',
    noInfo: true,
    inline: true,
    hot: true
  }
};
