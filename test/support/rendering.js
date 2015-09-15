import {addons, createElement} from 'react/addons';
let {TestUtils} = addons;

export function renderComponent(component, props={}, children=[]) {
  let shallowRenderer = TestUtils.createRenderer();

  if (!Array.isArray(children)) {
    children = [children];
  }

  shallowRenderer.render(
    createElement(component, props, children)
  );

  return shallowRenderer.getRenderOutput();
}
