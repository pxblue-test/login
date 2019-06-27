import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { Header, Button } from 'react-native-elements';
import Input from '../components/MatTextfield';

import styles from "../styles";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "" }
    }
    render() {
        const { navigation } = this.props;
        const emailBlock = (
            <View style={styles.registrationPage}>
                <Text style={styles.heading}>Register an Account</Text>
                <Text>To register for an account, enter your email address below. We will send you an email with a confirmation code to verify your address.</Text>
                
            
                <Text>
                    Already have an account?  <Text style={styles.link}>Log In</Text>
                </Text>
              
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
                <View style={{ padding: 20 }}>
                     {emailBlock}
                 </View>
            </View>
        );
    }
}
export default Register;