import React from 'react';
import {
    AsyncStorage,
    Button,
    View,
  } from 'react-native';

class SignIn extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{height: '100%', justifyContent: 'center', backgroundColor: '#007bc1'}}>
                <Button title="Sign in!" onPress={this._signInAsync} color="white" />
                <Button title="Register" onPress={()=>navigation.push('Register')} color="white"  />
                <Button title="Forgot Password" onPress={()=>navigation.push('Forgot')} color="white"  />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

export default SignIn;