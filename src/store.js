import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootReducer from './redux/reducers';

const persistConfig = {
    key: 'primary',
    storage,
    blackList: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function initializeStore(initialState = {}) {
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}
