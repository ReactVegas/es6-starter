/* eslint-env node */

import defaultConfig from './karma.default';

export default function(config) {
  defaultConfig(config);
  config.set({
    singleRun: true,
    browsers: ['PhantomJS'],
    // Need to use phantomjs-shim for Function.prototype.bind until
    // karama-phantomjs-launcher upgrades to PhantomJS 2.0.
    // https://github.com/karma-runner/karma-phantomjs-launcher/issues/56
    frameworks: ['phantomjs-shim'].concat(config.frameworks)
  });
}
