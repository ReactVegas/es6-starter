/* eslint-env node */

import {resolve} from 'path';
import defaultConfig from './webpack.default';

export default {
  ...defaultConfig,
  devtool: 'inline-source-map',
  resolve: {
    root: [
      ...defaultConfig.resolve.root,
      resolve(__dirname, '..', 'test')
    ]
  }
};
