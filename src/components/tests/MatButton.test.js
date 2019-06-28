import React from 'react';
import Button from '../MatButton';

import renderer from 'react-test-renderer';

describe('Material Button Tests (Default)', function () {
  it('Clear Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'clear'} color={'default'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Solid Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'solid'} color={'default'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outline Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'outline'} color={'default'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('Material Button Tests (Primary)', function () {
  it('Clear Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'clear'} color={'primary'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Solid Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'solid'} color={'primary'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outline Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'outline'} color={'primary'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('Material Button Tests (Secondary)', function () {
  it('Clear Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'clear'} color={'secondary'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Solid Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'solid'} color={'secondary'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Outline Renders', () => {
    const tree = renderer.create(
      <Button title={'TEST'} type={'outline'} color={'secondary'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});