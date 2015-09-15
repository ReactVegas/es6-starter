/* eslint-env node */

import webpackConfig from './webpack.test';

export default function(config) {
  return config.set({
    frameworks: ['mocha'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      'test/unit/main.js': ['webpack', 'sourcemap']
    },
    files: [
      'test/unit/main.js'
    ]
  });
}
