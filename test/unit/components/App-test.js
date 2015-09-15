import {assert} from 'support/chai';
import {renderComponent} from 'support/rendering';
import App from 'components/App';

describe('App', function() {
  it('renders header', function() {
    let component = renderComponent(App);
    let h1 = component.props.children[0];

    assert.equal(h1.props.children, 'Hello World!');
  });
});
