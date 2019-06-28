import React from 'react';
import SignIn from '../SignIn';

import renderer from 'react-test-renderer';

describe('SingIN Page Tests', function () {
  it('Page Renders', () => {
    const tree = renderer.create(
      <SignIn/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
