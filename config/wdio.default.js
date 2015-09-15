export default {
  config: {
    baseUrl: 'http://localhost:8080',
    capabilities: [{
      browserName: 'chrome'
    }],
    specs: [
      './test/integration/**/*-test.js'
    ]
  }
};
