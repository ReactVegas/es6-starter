import {assert} from '../../support/chai';
import {shallow} from 'enzyme';
import App from 'components/App';

describe('App', function() {
  it('renders header', function() {
    const component = shallow(<App />);
    const h1 = component.find('h1');
    assert.equal(h1.text(), 'Hello World!');
  });
});
