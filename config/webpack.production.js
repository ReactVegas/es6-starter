/* eslint-env node */

import webpack from 'webpack';
import defaultConfig from './webpack.default';

const config = {
  ...defaultConfig,
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false}
    })
  ]
};

export default config;
