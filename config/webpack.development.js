/* eslint-env node */

import webpack from 'webpack';

const port = process.env.PORT || '8080';
const config = {
  debug: true,
  devtool: 'eval',
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + port,
    'webpack/hot/dev-server',
    './src/main'
  ],
  output: {
    path: './public',
    filename: 'bundle.js'
  }
};

export default config;
