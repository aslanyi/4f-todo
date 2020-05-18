import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { firebaseInit, FirebaseHelper, getFirestore, getAuth } from '../firebase';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'primary',
    storage: storage,
    whiteList: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = (initialState = {}) => {
    firebaseInit();
    FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
};
