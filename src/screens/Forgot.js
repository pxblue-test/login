import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Header, Button } from 'react-native-elements';
import Input from '../components/MatTextfield';
import { ROUTES } from '../constants/routes';


const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

class Forgot extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: ''
        }
    }
    sendReset(email){
        /* TODO: Call a function that sends the reset code */

        // We hardcode navigation to the next page
        this.props.navigation.push(ROUTES.RESET_PASSWORD);
    }

    render() {
        const { navigation } = this.props;
        const { email } = this.state;
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    // leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigation.pop() }}
                    centerComponent={{ text: 'Forgot Password', style: { color: 'white' } }}
                    leftComponent={{ text: 'Cancel', style: {color: 'white' }, onPress: () => navigation.popToTop()}}
                />
                <View style={{ padding: 20 }}>
                    <Text style={{marginBottom: 20}}>Enter your email address below and we will send you a verification code to authorize a password reset.</Text>
                    <Input 
                        label={'Email Address*'} 
                        value={email} 
                        onChangeText={(newText) => this.setState({email: newText})}
                        containerStyle={{marginBottom: 20}}
                        errorMessage={email && !email.match(EMAIL_REGEX) ? 'Invalid Email Address' : ' '}
                    />
                    <Button 
                        title={'NEXT'} 
                        onPress={() => this.sendReset(email)}
                        disabled={!email.match(EMAIL_REGEX)}
                    />
                </View>
            </View>
        );
    }
}
export default Forgot;

export class ResetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            code: '',
            password: '',
            confirm: ''
        }
    }
    _canReset(){
        const { code, password, confirm } = this.state;
        if (code.length < 3){ return false }
        if( password.length < 1){ return false }
        if( password !== confirm ){ return false }
        return true;
    }

    _resetPassword(){
        /* TODO: Send a call to actually reset the password */

        // We hardcode navigation back to the login screen
        this.props.navigation.popToTop();
    }

    render() {
        const { navigation } = this.props;
        const { code, password, confirm } = this.state;
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: 'New Password', style: { color: 'white' } }}
                    leftComponent={{ text: 'Cancel', style: {color: 'white' }, onPress: () => navigation.popToTop()}}
                />
                <View style={{ padding: 20 }}>
                    <Text style={{marginBottom: 20}}>Enter your new password below.</Text>
                    <Input 
                        label={'Verification Code'} 
                        value={code} 
                        onChangeText={(newText) => this.setState({code: newText})}
                        errorMessage={code && code.length < 3 ? 'Invalid Code' : ' '}
                    />
                    <Input 
                        label={'New Password'} 
                        value={password} 
                        secureTextEntry={true}
                        onChangeText={(newText) => this.setState({password: newText})}
                        errorMessage={' '}
                    />
                    <Input 
                        label={'Confirm Password'} 
                        value={confirm} 
                        secureTextEntry={true}
                        onChangeText={(newText) => this.setState({confirm: newText})}
                        containerStyle={{marginBottom: 20}}
                        errorMessage={password.length > 0 && confirm.length > 0 && password !== confirm ? 'Passwords don\'t match' : ' '}
                    />
                    <Button 
                        title={'RESET'} 
                        onPress={() => this._resetPassword()}
                        disabled={!this._canReset()}
                        style={{marginBottom: 20}}
                    />
                </View>
            </View>
        );
    }
}