import {assert} from '../support/chai';

describe('Site', () => {
  before(async () => {
    await browser.url('/');
  });

  it('should have example text', async () => {
    let headerText = await browser.getText('h1');
    let descriptionText = await browser.getText('p');

    assert.equal(headerText, 'Hello World!');
    assert.equal(descriptionText, 'This is the starter es6-project.');
  });
});
