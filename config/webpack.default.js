/* eslint-env node */

const config = {
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
        loaders: ['react-hot', 'babel'],
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

export default config;
