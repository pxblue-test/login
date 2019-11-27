import React from 'react';
import {
    // NOTE: uncomment the line below in your production code.
    // AsyncStorage,
    View,
} from 'react-native';
import Button from '../components/MatButton';
// import AsyncStorage from '@react-native-community/async-storage';

import { Header } from 'react-native-elements';
import { ROUTES } from '../constants/routes';

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
                <Button containerStyle={{marginHorizontal: 20, marginVertical: 20}} color={'primary'} type={'outline'} title="HOME PAGE" onPress={() => navigation.pop()} />
                <Button containerStyle={{marginHorizontal: 20}} color={'primary'} type={'solid'} title="SIGN OUT" onPress={this._signOutAsync} />

            </View>
        );
    }
    _signOutAsync = async () => {
        // NOTE: In your production code, uncomment the line below, which is used to clear all the local storages for all clients, libraries.
        // await AsyncStorage.clear();
        this.props.navigation.navigate(ROUTES.AUTH);
    };
}
export default Other;