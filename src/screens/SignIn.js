import React from 'react';
import {
    AsyncStorage,
    Button,
    View,
  } from 'react-native';
  import { ROUTES } from '../constants/routes';

class SignIn extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{height: '100%', justifyContent: 'center', backgroundColor: '#007bc1'}}>
                <Button title="Sign in!" onPress={this._signInAsync} color="white" />
                <Button title="Register" onPress={()=>navigation.push(ROUTES.REGISTER)} color="white"  />
                <Button title="Forgot Password" onPress={()=>navigation.push(ROUTES.FORGOT)} color="white"  />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate(ROUTES.APP);
    };
}

export default SignIn;