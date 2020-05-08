import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { firebaseInit } from '../firebase';

export const makeStore = (initialState = {}) => {
    firebaseInit();
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};
