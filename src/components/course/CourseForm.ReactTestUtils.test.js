import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';  // React Test Utils
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    onSave: () => {},
    onChange: () => {},
    saving: saving,
    errors: {}
  };

  let renderer = TestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('Testing CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup();
    expect(output.type).toBe('form');

    let [h1] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" whenot saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving" when saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });

});
