/* eslint-env node */

let context = require.context('.', true, /\-test$/);
context.keys().forEach(context);
