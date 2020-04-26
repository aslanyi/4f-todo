import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const makeStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, composeWithDevTools());
};
