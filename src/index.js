import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './style.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {EatonThemes} from '@pxblue/themes/react';
import { Provider } from 'react-redux';
import {store} from './store/store.js';

ReactDOM.render(
  <MuiThemeProvider theme={createMuiTheme(EatonThemes.blue)}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);