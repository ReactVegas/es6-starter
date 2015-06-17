/* eslint-env node */

require('babel/register');

var environment = process.env.NODE_ENV || 'development';
var defaultConfig = require('./config/webpack.default');
var environmentConfig = require('./config/webpack.' + environment);
var config = Object.assign({}, defaultConfig, environmentConfig);

module.exports = config;
