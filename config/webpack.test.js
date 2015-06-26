/* eslint-env node */

import defaultConfig from './webpack.default';

const config = {
  ...defaultConfig,
  devtool: 'inline-source-map'
};

export default config;
