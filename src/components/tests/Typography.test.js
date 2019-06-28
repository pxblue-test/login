import React from 'react';
import Text from '../Typography';

import renderer from 'react-test-renderer';

describe('Typography', function () {
  it('Text Renders', () => {
    const tree = renderer.create(
      <Text>Here is a sample text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Text Renders with custom styles', () => {
    const tree = renderer.create(
      <Text style={{color: 'green', fontSize: 24}}>Here is a sample custom text</Text>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});