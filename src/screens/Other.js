import React from 'react';
import {
    AsyncStorage,
    Button,
    View,
} from 'react-native';
import { Header } from 'react-native-elements';

class Other extends React.Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Header
                    containerStyle={{
                        backgroundColor: '#007bc1',
                        justifyContent: 'space-around',
                    }}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Other Page', style: { color: 'white' } }}
                />
                <Button title="HOME PAGE" onPress={() => navigation.pop()} />
                <Button title="SIGN OUT" onPress={this._signOutAsync} />
            </View>
        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
export default Other;