import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Header } from 'react-native-elements';
import Input from '../components/MatTextfield';
import Button from '../components/MatButton';
import styles from "../styles";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from '../constants';
import { ROUTES } from '../constants/routes';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            verificationCode: "",
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
            step: 1,
        }
    }

    _doRequiredValidation = (key, value) => {
        if(!value.trim()) {
            this.setState({ [`${key}Error`]: 'required'});
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
        if(!confirmPassword.trim()) {
            confirmPasswordError= "required";
        } else if(password !== confirmPassword) {
            confirmPasswordError= "Passwords do not match";
        }
        this.setState({ confirmPasswordError });
    }
    _onCancel = () => {
        this.props.navigation.navigate(ROUTES.SIGN_IN);
    };

    _onFinish = () => {
        this.props.navigation.navigate(ROUTES.APP);
    };
    render() {
        const { navigation } = this.props;
        const emailBlock = (
            <View style={{ padding: 20 }}>
                <Text style={styles.heading}>Register an Account</Text>
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
                    onPress={() => this.setState({ step: 2})}
                />
            </View>
        );
        const emailVerificationBlock = (
            <View style={{ padding: 20 }}>
                <Text style={styles.heading}>Verify Email Address</Text>
                <Text style={{ marginBottom: 20 }}>An email has been sent to adasd@gmail.com. Enter the verification code or follow the link provided to continue.</Text>
                
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Input
                        containerStyle={{flex: 1}}
                        label={'Verification Code'}
                        value={this.state.verificationCode}
                        onChangeText={(newText) => this.setState({ verificationCode: newText })}
                    />
                    <Button
                        title={'RESEND'}
                        color={'primary'}
                        type={'clear'}
                        style={{ marginLeft: 10, flex: 0 }}
                    />
                </View>
            
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button
                        title={'Back'}
                        type={'outline'}
                        style={{ height: 100, width: 120}}
                        onPress={() => this.setState({ step: 1})}
                    />
                    <Button
                        title={'Next'}
                        color={'primary'}
                        style={{ height: 100, width: 120}}
                        onPress={() => this.setState({ step: 3})}
                        disabled={!this.state.verificationCode}
                    />
                </View>
            </View>
        );
        const createAccountBlock = (
            <View style={{ padding: 20 }}>
                <Text style={styles.heading}>Create Account</Text>
                <Text style={{ marginBottom: 20 }}>To complete your account registration, enter your account details below.</Text>
                <Input
                    label={'First Name *'}
                    value={this.state.firstName}
                    onChangeText={(newText) => this.setState({ firstName: newText, firstNameError: '' })}
                    containerStyle={{ marginBottom: 20 }}
                    onBlur={() => this._doRequiredValidation('firstName', this.state.firstName)}
                    errorMessage={this.state.firstNameError}
                />
               <Input
                    label={'Last Name *'}
                    value={this.state.lastName}
                    onChangeText={(newText) => this.setState({ lastName: newText, lastNameError: '' })}
                    containerStyle={{ marginBottom: 20 }}
                    onBlur={() => this._doRequiredValidation('lastName', this.state.lastName)}
                    errorMessage={this.state.lastNameError}
                />
                <Input
                    label={'Title/Role'}
                    value={this.state.role}
                    onChangeText={(newText) => this.setState({ role: newText })}
                    containerStyle={{ marginBottom: 20 }}
                />
                <Input
                    label={'Phone *'}
                    keyboardType={'phone-pad'}
                    value={this.state.phone}
                    onChangeText={(newText) => this.setState({ phone: newText, phoneError: '' })}
                    containerStyle={{ marginBottom: 20 }}
                    onBlur={this._doPhoneValidation}
                    errorMessage={this.state.phoneError}
                />
                <Input
                    label={'Password *'}
                    value={this.state.password}
                    onChangeText={(newText) => this.setState({ password: newText, passwordError: '' })}
                    containerStyle={{ marginBottom: 20 }}
                    secureTextEntry
                    onBlur={() => this._doRequiredValidation('password', this.state.password)}
                    errorMessage={this.state.passwordError}
                />
                <Input
                    label={'Confrim Password *'}
                    value={this.state.confirmPassword}
                    onChangeText={(newText) => this.setState({ confirmPassword: newText, confirmPasswordError: '' })}
                    containerStyle={{ marginBottom: 20 }}
                    secureTextEntry
                    onBlur={this._doPasswordValidation}
                    errorMessage={this.state.confirmPasswordError}
                />
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>

                    <Button
                        title={'Cancel'}
                        type={'outline'}
                        style={{ height: 100, width: 120}}
                        onPress={this._onCancel}
                    />
                    <Button
                        title={'Finish'}
                        color={'primary'}
                        style={{ height: 100, width: 120}}
                        onPress={this._onFinish}
                    />
                </View>
            </View>
        );
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigation.pop() }}
                    centerComponent={{ text: 'Register', style: { color: 'white' } }}
                />
                {createAccountBlock}
                {
                    (()=>{
                        if(this.state.step === 1) {
                            return emailBlock;
                        }
                        if(this.state.step === 2){
                            return emailVerificationBlock;
                        }
                        return createAccountBlock
                    })()
                }
                
            </View>
        );
    }
}
export default Register;