/* eslint-env node */

import webpack from 'webpack';

const config = {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: {comments: false}
    })
  ]
};

export default config;
