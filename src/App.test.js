import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './pages/Login';
import Home from './pages/Home';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import {SortableList} from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {EatonThemes} from '@pxblue/themes/react';
import { Provider } from 'react-redux';
import {store} from './store/store.js';
import * as Actions from './actions/actions';


Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
 const div = document.createElement('div');
 ReactDOM.render(
    <Provider store={store}><Login/></Provider>, div);
 ReactDOM.unmountComponentAtNode(div);
});

it('blocks login without a valid email address', () => {
    const login = shallow(<Login store={store}></Login>).dive().dive().instance();
    login.setState({password: 'password'});
    let emails = ['a@a.a','invalid',null,'invalid@email',undefined,'',-1];
    for(let i = 0; i < emails.length; i++){
        login.setState({email: emails[i]});
        expect(login.canLogIn()).toBeFalsy();
    }
});

it('allows login with a valid email address & password', () => {
    const login = shallow(<Login store={store}></Login>).dive().dive().instance();
    login.setState({password: 'password'});

    let emails = ['a@a.aa','test@email.com','12345@12345.com'];
    for(let i = 0; i < emails.length; i++){
        login.setState({email: emails[i]});
        expect(login.canLogIn()).toBeTruthy();
    }
});

it('starts user on login page', () => {
    const login = mount(<Provider store={store}><App/></Provider>);
    expect(login.find(Login).length).toBe(1);
});

it('stores/clears token after successful login/logout', () => {
    const app = mount(<Provider store={store}><App/></Provider>);
    expect(app.find(Login).length).toBe(1);
    store.dispatch(Actions.login('fake','fake'));
    expect(store.getState().authentication.token).toEqual('token');
    store.dispatch(Actions.logout());
    expect(store.getState().authentication.token).toBeNull();
    expect(store.getState().authentication.email).toBeNull();
});
