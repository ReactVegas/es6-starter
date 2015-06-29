/* eslint-env node */

import defaultConfig from './webpack.default';

export default {
  ...defaultConfig,
  devtool: 'inline-source-map'
};
