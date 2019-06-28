import React from 'react';

// Constants
import { ROUTES } from '../constants/routes';
import { EMAIL_REGEX } from '../constants/index';

// Components
import {
    AsyncStorage,
    View,
    Image,
    StyleSheet,
    ScrollView
} from "react-native";
import { Card, CheckBox } from "react-native-elements";
//   import AsyncStorage from '@react-native-community/async-storage';

// Custom styled components
import Button from '../components/MatButton';
import Input from '../components/MatTextfield';
import Text from '../components/Typography';

// Styles
import * as Colors from '@pxblue/colors';
import styles from "../styles";

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
        const { navigation } = this.props;
        const { email, password, canRemember } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: Colors.blue['500'] }}>
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} keyboardShouldPersistTaps={'always'}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Card containerStyle={{ paddingHorizontal: 50 }}>
                            <View style={styles.logo_product}>
                                <Image
                                    resizeMethod='resize'
                                    source={require("../../assets/logo.jpg")}
                                    style={styles.svg}
                                />
                            </View>
                            <Input
                                label={'Email Address*'}
                                keyboardType={'email-address'}
                                value={email}
                                onChangeText={(newText) => this.setState({ email: newText })}
                                errorMessage={email && !email.match(EMAIL_REGEX) ? 'Invalid Email Address' : ' '}
                            />
                            <Input
                                label={'Password*'}
                                value={password}
                                onChangeText={(newText) => this.setState({ password: newText })}
                                containerStyle={{ marginBottom: 20 }}
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
                                containerStyle={styles.checkbox}
                                textStyle={{ fontWeight: '400', fontSize: 16 }}
                                onPress={() => this.setState({ canRemember: !canRemember })}
                            />
                            <View style={StyleSheet.flatten([styles.horizontal_even, { marginTop: 10 }])}>
                                <Button
                                    type={'clear'}
                                    title="Sign Up"
                                    onPress={() => navigation.push(ROUTES.REGISTER)}
                                    color={'primary'}
                                />
                                <Button
                                    type={'clear'}
                                    title="Forgot Password"
                                    onPress={() => navigation.push(ROUTES.FORGOT)}
                                    color={'primary'}
                                />
                            </View>
                            <View style={styles.logo_cyber}>
                                <Image
                                    resizeMethod='resize'
                                    source={require("../../assets/cyber.jpg")}
                                    style={styles.svg}
                                />
                            </View>
                            <Text style={{ textAlign: 'center' }}>
                                By Logging in you agree to our
                            </Text>
                            <Text style={{ textAlign: 'center' }}>
                                <Text style={styles.link}>Terms and Conditions</Text> and <Text style={styles.link}>Privacy policy </Text>
                            </Text>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SignIn;