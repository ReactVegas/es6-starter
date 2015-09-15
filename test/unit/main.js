/* eslint-env node */

import chai from 'chai';

chai.config.includeStack = true;
chai.config.truncateThreshold = false;

let context = require.context('.', true, /\-test$/);
context.keys().forEach(context);
