import * as types from './types';
import { FirebaseHelper, getAuth, getFirestore, errorMessages, firebaseUser, firebase } from '../../../firebase';
import * as collectionName from '../../../firebase/constans';
import { setError } from '../actions';
import setToken from '../../utils/setToken';
import http from '../../utils/http';

export const getUser = (user) => {
    return {
        type: types.GET_USER,
        payload: user,
    };
};

export const fetchUser = () => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const user = await firebaseHelper.getDoc(collectionName.USERS, state.user.id);
            dispatch(getUser(user));
            if (state.error.message) dispatch({ type: 'CLEAR_ERROR' });
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const updateUser = (user) => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const isUpdated = await firebaseHelper.update(collectionName.USERS, user.id, user);
            if (isUpdated) fetchUser();
            if (error.message) dispatch({ type: 'CLEAR_ERROR' });
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const loginUserWithEmail = (email, password, router) => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const response = await firebaseHelper.loginUserWithEmailPassword(email, password);
            console.log(response, 'response');
            const user = firebaseUser(response);
            if (Object.keys(user).length > 0) {
                setToken();
                dispatch(getUser(user));
                if (error.message) dispatch({ type: 'CLEAR_ERROR' });
                router.push('/');
            }
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const loginUserWithProvider = (provider) => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const user = await firebaseHelper.loginUserWithProvider(provider);
            if (Object.keys(user).length > 0) {
                dispatch(getUser(user));
                if (error.message) dispatch({ type: 'CLEAR_ERROR' });
            }
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const registerUserWithEmail = (email, password) => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const isRegistered = await firebaseHelper.registerUserWithEmailPassword(email, password);
            console.log(isRegistered);
            if (error.message) dispatch({ type: 'CLEAR_ERROR' });
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const verifyToken = (idToken) => {
    return async (dispatch, getState) => {
        try {
           await http('/api/login', 'POST', { idToken });
        } catch (error) {
            dispatch(getUser({ isTokenExpired: true }));
        }
    };
};
