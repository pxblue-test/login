import React from 'react';
import Input from '../MatTextfield';

import renderer from 'react-test-renderer';

describe('Material Textfield', function () {
  it('Renders Normal', () => {
    const tree = renderer.create(
        <Input
            label={'Sample'}
            value={''}
            errorMessage={' '}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders Error', () => {
    const tree = renderer.create(
        <Input
            label={'Error'}
            value={'INVALID'}
            errorMessage={'There was an error'}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders Complete', () => {
    const tree = renderer.create(
        <Input
            label={'Success'}
            value={'VALID'}
            errorMessage={' '}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders with Custom Styles', () => {
    const tree = renderer.create(
        <Input
            label={'Sample'}
            value={'sample'}
            errorMessage={' '}
            containerStyle={{margin: 20}}
            inputContainerStyle={{padding: 20}}
            labelStyle={{fontSize: 20}}
            inputStyle={{backgroundColor: 'green'}}
            errorStyle={{color: 'purple'}}
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});