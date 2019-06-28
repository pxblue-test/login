import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import Input from '../components/MatTextfield';
import Text from '../components/Typography';
import Button from '../components/MatButton';
import { ROUTES } from '../constants/routes';
import { EMAIL_REGEX } from '../constants/index';

class Forgot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    sendReset(email) {
        /* TODO: Call a function that sends the reset code */

        // We hardcode navigation to the next page
        this.props.navigation.push(ROUTES.RESET_PASSWORD);
    }

    render() {
        const { navigation } = this.props;
        const { email } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: 'Forgot Password', style: { color: 'white' } }}
                    leftComponent={{ text: 'Cancel', style: { color: 'white' }, onPress: () => navigation.popToTop() }}
                />
                <ScrollView style={{flex: 1}} contentContainerStyle={{padding: 20}} keyboardShouldPersistTaps={'always'}>
                    <Text style={{ marginBottom: 20 }}>Enter your email address below and we will send you a verification code to authorize a password reset.</Text>
                    <Input
                        label={'Email Address*'}
                        keyboardType={'email-address'}
                        value={email}
                        onChangeText={(newText) => this.setState({ email: newText })}
                        containerStyle={{ marginBottom: 20 }}
                        errorMessage={email && !email.match(EMAIL_REGEX) ? 'Invalid Email Address' : ' '}
                    />
                    <Button
                        title={'NEXT'}
                        color={'primary'}
                        onPress={() => this.sendReset(email)}
                        disabled={!email.match(EMAIL_REGEX)}
                    />
                </ScrollView>
            </View>
        );
    }
}
export default Forgot;

export class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            password: '',
            confirm: ''
        }
    }
    _canReset() {
        const { code, password, confirm } = this.state;
        if (code.length < 3) { return false }
        if (password.length < 1) { return false }
        if (password !== confirm) { return false }
        return true;
    }

    _resetPassword() {
        /* TODO: Send a call to actually reset the password */

        // We hardcode navigation back to the login screen
        this.props.navigation.popToTop();
    }

    _resendVerificationCode() {
        /* TODO: Send a call to actually resend the verification code */
    }

    render() {
        const { navigation } = this.props;
        const { code, password, confirm } = this.state;
        return (
            <View style={{flex: 1}}>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: 'New Password', style: { color: 'white' } }}
                    leftComponent={{ text: 'Cancel', style: { color: 'white' }, onPress: () => navigation.popToTop() }}
                />
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{padding: 20}} keyboardShouldPersistTaps={'always'}>
                    <Text style={{ marginBottom: 20 }}>Enter your new password below.</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Input
                            containerStyle={{flex: 1}}
                            label={'Verification Code'}
                            value={code}
                            onChangeText={(newText) => this.setState({ code: newText })}
                            errorMessage={code && code.length < 3 ? 'Invalid Code' : ' '}
                        />
                        <Button
                            title={'RESEND'}
                            color={'primary'}
                            type={'clear'}
                            onPress={() => this._resendVerificationCode()}
                            style={{ marginLeft: 10, flex: 0 }}
                        />
                    </View>
                    <Input
                        label={'New Password'}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={(newText) => this.setState({ password: newText })}
                        errorMessage={' '}
                    />
                    <Input
                        label={'Confirm Password'}
                        value={confirm}
                        secureTextEntry={true}
                        onChangeText={(newText) => this.setState({ confirm: newText })}
                        containerStyle={{ marginBottom: 20 }}
                        errorMessage={password.length > 0 && confirm.length > 0 && password !== confirm ? 'Passwords don\'t match' : ' '}
                    />
                    <Button
                        title={'RESET'}
                        color={'primary'}
                        onPress={() => this._resetPassword()}
                        disabled={!this._canReset()}
                        style={{ marginBottom: 20 }}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});