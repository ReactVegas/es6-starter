/* eslint-env node */

var environment = process.env.CI === 'true' ? 'ci' : 'local';

require('babel-register');
module.exports = require('./config/wdio.' + environment).default;
