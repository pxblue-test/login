 import React from 'react';
import { ROUTES } from '../constants/routes';
import Input from '../components/MatTextfield';
import {
    Platform,
    AsyncStorage,
    Text,
    TextInput,
    View,
    ImageBackground,
    Image,
  } from "react-native";
import { Card, CheckBox } from "react-native-elements";
    
import styles from "../styles";

//   import AsyncStorage from '@react-native-community/async-storage';
import Button from '../components/MatButton';
import * as Colors from '@pxblue/colors';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', canRemember: true };
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate(ROUTES.APP);
    };

    render() {
        const {navigation} = this.props;
        const { email, password, canRemember } = this.state;
        return (
            <View style={{height: '100%', marginLeft: -15, paddingLeft: -15, justifyContent: 'center', backgroundColor: Colors.blue['500']}}>
                <Card containerStyle={styles.card}>
                    <View style={{flex: 1}}>
                        <Image
                            source={require("../../assets/12.jpg")}
                            style={styles.logo}
                        />
                        <Input 
                            label={'Email Address*'}
                            keyboardType={'email-address'}
                            value={email} 
                            onChangeText={(newText) => this.setState({email : newText})}
                            errorMessage={email && !email.match(EMAIL_REGEX) ? 'Invalid Email Address' : ' '}
                        />
                        <Input 
                            label={'Password*'} 
                            value={password} 
                            onChangeText={(newText) => this.setState({password : newText})}
                            containerStyle={{marginBottom: 20}}
                            secureTextEntry
                        />
                        <Button 
                            title={'Log In'} 
                            onPress={this._signInAsync}
                            disabled={!email.match(EMAIL_REGEX) || !password}
                            color={'primary'}
                        />
                        <CheckBox
                            title="Remember me"
                            checked={canRemember}
                            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0}}
                            onPress={() => this.setState({ canRemember: !canRemember })}
                        />
                        <View style={styles.signUpAndPassword}>
                            <Button
                                type={'clear'}
                                title="Sign Up"
                                onPress={()=>navigation.push(ROUTES.REGISTER)}
                                color={'primary'}
                            />
                            <Button 
                                type={'clear'} 
                                title="Forgot Password" 
                                onPress={()=>navigation.push(ROUTES.FORGOT)} 
                                color={'primary'}
                            />
                        </View>
                        <Image
                            source={require("../..//assets/Logo_Samples2_91_min.jpg")}
                            style={styles.logo1}
                        />
                        <Text style={styles.termsAndConditions}>
                            By Logging in you agree to our
                        </Text>
                        <Text>
                            <Text style={styles.link}>Terms and Conditions</Text> and <Text style={styles.link}>Privacy policy </Text>
                        </Text>
                    </View>            
                </Card>      
            </View>
        );
    }
}

export default SignIn;