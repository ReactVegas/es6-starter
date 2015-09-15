/* eslint-env node */

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
  devServer: {
    contentBase: './public',
    noInfo: true,
    inline: true,
    hot: true
  }
};
