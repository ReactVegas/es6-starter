/* eslint-env node */

import defaultConfig from './karma.default';

export default function(config) {
  defaultConfig(config);
  config.set({
    browsers: ['Chrome']
  });
}
