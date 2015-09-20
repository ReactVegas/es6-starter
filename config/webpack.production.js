/* eslint-env node */

import webpack from 'webpack';
import defaultConfig from './webpack.default';

export default {
  ...defaultConfig,
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false}
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
