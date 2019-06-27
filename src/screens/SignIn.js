import React from 'react';
import {
    View,
  } from 'react-native';
  import AsyncStorage from '@react-native-community/async-storage';

  import { ROUTES } from '../constants/routes';
  import Button from '../components/MatButton';
  import * as Colors from '@pxblue/colors';

class SignIn extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{height: '100%', justifyContent: 'center', backgroundColor: Colors.blue['500']}}>
                <Button type={'clear'} titleStyle={{color: 'white'}} title="Sign in!" onPress={this._signInAsync} />
                <Button type={'clear'} titleStyle={{color: 'white'}} title="Register" onPress={()=>navigation.push(ROUTES.REGISTER)} />
                <Button type={'clear'} titleStyle={{color: 'white'}} title="Forgot Password" onPress={()=>navigation.push(ROUTES.FORGOT)} />
            </View>
        );
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate(ROUTES.APP);
    };
}

export default SignIn;