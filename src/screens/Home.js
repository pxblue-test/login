import React from 'react';
import View from 'react-native';

import { Header } from 'react-native-elements';
import { ROUTES } from '../constants/routes';
import Button from '../components/MatButton';


class Home extends React.Component {
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
          centerComponent={{ text: 'Main Application', style: { color: 'white' } }}
        />
        <Button containerStyle={{marginHorizontal: 20, marginVertical: 20}} color={'primary'} type={'outline'} title="OTHER PAGE" onPress={() => navigation.navigate(ROUTES.OTHER)} />
        <Button containerStyle={{marginHorizontal: 20}} color={'primary'} type={'solid'} title="SIGN OUT" onPress={this._signOutAsync} />
      </View>
    );
  }

  _signOutAsync = async () => {
    /* TODO: remove any references to user credentials from application memory and secure storage. */
    this.props.navigation.navigate(ROUTES.AUTH);
  };
}
export default Home;