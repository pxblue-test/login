import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header, colors } from 'react-native-elements';

// Styled Components
import Input from '../components/MatTextfield';
import Button from '../components/MatButton';
import Text from '../components/Typography';

// Constants
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '../constants';
import { ROUTES } from '../constants/routes';

// Styles
import styles from "../styles";
import * as Colors from '@pxblue/colors';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    _sendVerificationEmail() {
        /* TODO: Call the function to send the email with the verification code.*/
        this.props.navigation.push(ROUTES.VERIFY);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    leftComponent={{ text: 'Cancel', style: { color: 'white' }, onPress: () => navigation.popToTop() }}
                    centerComponent={{ text: 'Register', style: { color: 'white' } }}
                />
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps={'always'}>
                    <Text style={{ marginBottom: 20 }}>To register for an account, enter your email address below. We will send you an email with a confirmation code to verify your address.</Text>
                    <Input
                        label={'Email Address *'}
                        keyboardType={'email-address'}
                        value={this.state.email}
                        onChangeText={(newText) => this.setState({ email: newText })}
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <Text style={{ marginBottom: 20 }}>
                        Already have an account?  <Text style={styles.link} onPress={() => navigation.navigate(ROUTES.SIGN_IN)}>Log In</Text>
                    </Text>
                    <Button
                        title={'NEXT'}
                        color={'primary'}
                        disabled={!this.state.email.match(EMAIL_REGEX)}
                        onPress={() => this._sendVerificationEmail()}
                    />
                </ScrollView>
            </View>
        );
    }
}

export class Verify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: "",
        }
    }

    _resendVerificationCode() {
        /* TODO: Send a call to actually resend the verification code */
    }

    _verifyEmail() {
        /* TODO: Call a function to verify the code submitted by the user */

        // We hard-code navigation to the next step
        this.props.navigation.push(ROUTES.CREATE_ACCOUNT);
    }

    render() {
        const { navigation } = this.props;
        const { verificationCode } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    leftComponent={{ icon: 'arrow-back', color: 'white', onPress: () => navigation.pop() }}
                    centerComponent={{ text: 'Verify Email', style: { color: 'white' } }}
                />
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps={'always'}>
                    <Text style={{ marginBottom: 20 }}>An email has been sent to adasd@gmail.com. Enter the verification code or follow the link provided to continue.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <Input
                            containerStyle={{ flex: 1 }}
                            label={'Verification Code'}
                            value={verificationCode}
                            onChangeText={(newText) => this.setState({ verificationCode: newText })}
                            errorMessage={verificationCode && verificationCode.length < 3 ? 'Invalid Code' : ' '}
                        />
                        <Button
                            title={'RESEND'}
                            color={'primary'}
                            type={'clear'}
                            onPress={() => this._resendVerificationCode()}
                            style={{ marginLeft: 10, flex: 0 }}
                        />
                    </View>
                    <Button
                        title={'NEXT'}
                        color={'primary'}
                        onPress={() => this._verifyEmail()}
                        disabled={verificationCode.length < 3}
                    />
                </ScrollView>
            </View>
        );
    }
}

export class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            role: '',
            phone: '',
            phoneError: '',
            password: '',
            passwordError: '',
            confirmPassword: '',
            confirmPasswordError: '',
        }
    }

    _doRequiredValidation = (key, value) => {
        if (!value.trim()) {
            this.setState({ [`${key}Error`]: 'required' });
        }
    }

    _doPhoneValidation = () => {
        const { phone } = this.state;
        let phoneError = '';
        if (!phone.trim()) {
            phoneError = "required";
        } else if (!PHONE_NUMBER_REGEX.test(phone)) {
            phoneError = "Invalid phone number";
        }
        this.setState({ phoneError });
    }

    _doPasswordValidation = () => {
        const { password, confirmPassword } = this.state;
        let confirmPasswordError = '';
        if (!confirmPassword.trim()) {
            confirmPasswordError = "required";
        } else if (password !== confirmPassword) {
            confirmPasswordError = "Passwords do not match";
        }
        this.setState({ confirmPasswordError });
    }
    _onCancel = () => {
        this.props.navigation.navigate(ROUTES.SIGN_IN);
    };

    _onFinish = () => {
        this.props.navigation.popToTop();
    };

    _canSubmit() {
        const { firstName, lastName, phone, password, confirmPassword } = this.state;
        if (firstName.length < 1 || lastName.length < 1) { return false; }
        if (!phone.match(PHONE_NUMBER_REGEX)) { return false; }
        if (password.length < 1) { return false; }
        if (confirmPassword !== password) { return false; }
        return true;
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    leftComponent={{ text: 'Cancel', style: { color: '#fff' }, onPress: () => navigation.pop() }}
                    centerComponent={{ text: 'Create Account', style: { color: 'white' } }}
                />
                <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps={'always'}>
                    <Text style={{ marginBottom: 20 }}>To complete your account registration, enter your account details below.</Text>
                    <Input
                        label={'First Name *'}
                        value={this.state.firstName}
                        onChangeText={(newText) => this.setState({ firstName: newText, firstNameError: '' })}
                        containerStyle={{ marginBottom: 5 }}
                        onBlur={() => this._doRequiredValidation('firstName', this.state.firstName)}
                        errorMessage={this.state.firstNameError || ' '}
                    />
                    <Input
                        label={'Last Name *'}
                        value={this.state.lastName}
                        onChangeText={(newText) => this.setState({ lastName: newText, lastNameError: '' })}
                        containerStyle={{ marginBottom: 5 }}
                        onBlur={() => this._doRequiredValidation('lastName', this.state.lastName)}
                        errorMessage={this.state.lastNameError || ' '}
                    />
                    <Input
                        label={'Title/Role'}
                        value={this.state.role}
                        onChangeText={(newText) => this.setState({ role: newText })}
                        errorMessage={' '}
                        containerStyle={{ marginBottom: 5 }}
                    />
                    <Input
                        label={'Phone *'}
                        keyboardType={'phone-pad'}
                        value={this.state.phone}
                        onChangeText={(newText) => this.setState({ phone: newText, phoneError: '' })}
                        containerStyle={{ marginBottom: 5 }}
                        onBlur={this._doPhoneValidation}
                        errorMessage={this.state.phoneError || ' '}
                    />
                    <Input
                        label={'Password *'}
                        value={this.state.password}
                        onChangeText={(newText) => this.setState({ password: newText, passwordError: '' })}
                        containerStyle={{ marginBottom: 5 }}
                        secureTextEntry
                        // Have to do this for a bug in the RN version used by Expo (https://github.com/facebook/react-native/issues/22340) 
                        inputStyle={{ color: Colors.black['500'] }}
                        onBlur={() => this._doRequiredValidation('password', this.state.password)}
                        errorMessage={this.state.passwordError || ' '}
                    />
                    <Input
                        label={'Confirm Password *'}
                        value={this.state.confirmPassword}
                        onChangeText={(newText) => this.setState({ confirmPassword: newText, confirmPasswordError: '' })}
                        containerStyle={{ marginBottom: 20 }}
                        secureTextEntry
                        // Have to do this for a bug in the RN version used by Expo (https://github.com/facebook/react-native/issues/22340) 
                        inputStyle={{ color: Colors.black['500'] }}
                        onBlur={() => this._doPasswordValidation()}
                        errorMessage={this.state.confirmPasswordError || ' '}
                    />
                    <Button
                        title={'Finish'}
                        color={'primary'}
                        onPress={this._onFinish}
                        disabled={!this._canSubmit()}
                    />
                </ScrollView>
            </View>
        );
    }
}