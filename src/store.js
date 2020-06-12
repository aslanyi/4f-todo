import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['user'],
};

let store;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function makeStore(initialState = {}) {
    const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? makeStore(preloadedState)
  
    if (preloadedState && store) {
      _store = makeStore({
        ...store.getState(),
        ...preloadedState,
      })
      store = undefined
    }

    if (typeof window === 'undefined') return _store

    if (!store) store = _store

    return _store
  }
