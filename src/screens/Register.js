import React from 'react';
import {
    View,
} from 'react-native';
import { Header } from 'react-native-elements';

class Register extends React.Component {
    render() {
        const { navigation } = this.props;
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
            </View>
        );
    }
}
export default Register;