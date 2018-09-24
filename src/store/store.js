import { createStore, applyMiddleware} from 'redux'
import Reducer from '../reducers/reducers.js'
import thunk from 'redux-thunk';

export const initialStore = {
  authentication:{
    token: null,
    email: null
  }
};

export const store = createStore(
    Reducer,
    initialStore,
    applyMiddleware(thunk)
);