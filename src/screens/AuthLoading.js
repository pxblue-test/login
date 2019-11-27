import React from 'react';
import {
  ActivityIndicator,
  // NOTE: uncomment the line below in your production code.
  // AsyncStorage,
  StatusBar,
  View,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { ROUTES } from '../constants/routes';


class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // NOTE: In your production code, uncomment the line below, which is used to fetch the user token stored locally on the device.
    // const userToken = await AsyncStorage.getItem('userToken');
    const userToken = "a";

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? ROUTES.APP : ROUTES.AUTH);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoading;