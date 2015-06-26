import {addons} from 'react/addons';
import {expect} from 'chai';
import App from '../App';

let TestUtils = addons.TestUtils;

describe('App', function() {
  beforeEach(function() {
    this.component = TestUtils.renderIntoDocument(<App />);
  });

  it('renders header', function() {
    let headerElement = this.component.refs.header.getDOMNode();
    expect(headerElement.textContent).to.equal('Hello World!');
  });
});
