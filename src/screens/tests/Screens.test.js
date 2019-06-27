import React from 'react';

// Main Pages
import HomeScreen from '../Home';
import OtherScreen from '../Other';

// Authorization workflow pages
import AuthLoadingScreen from '../AuthLoading';
import SignInScreen from '../SignIn';
import RegisterScreen from '../Register';
import ForgotScreen, { ResetPassword as ResetPasswordScreen} from '../Forgot';

import renderer from 'react-test-renderer';

describe('Screens Render Correctly', function () {
  it('AuthLoading', () => {
    const tree = renderer.create(<AuthLoadingScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Forgot', () => {
    const tree = renderer.create(<ForgotScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('ResetPassword', () => {
    const tree = renderer.create(<ResetPasswordScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home', () => {
    const tree = renderer.create(<HomeScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Other', () => {
    const tree = renderer.create(<OtherScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('SignIn', () => {
    const tree = renderer.create(<SignInScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Register', () => {
    const tree = renderer.create(<RegisterScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});