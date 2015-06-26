/* eslint-env node */

import webpackConfig from './webpack.test';

export default function(config) {
  return config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    preprocessors: {
      'src/test.js': ['webpack', 'sourcemap']
    },
    files: [
      'src/test.js'
    ]
  });
}
