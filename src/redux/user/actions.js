import * as types from './types';
import { FirebaseHelper, getAuth, getFirestore, errorMessages } from '../../../firebase';
import * as collectionName from '../../../firebase/constans';
import { setError } from '../actions';

export const getUser = (user) => {
    return {
        type: types.GET_USER,
        payload: user,
    };
};

export const fetchUser = () => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
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
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
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

export const loginUserWithEmail = (email, password) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const user = await firebaseHelper.loginUserWithEmailPassword(email, password);
            if (Object.keys(user).length > 0) {
                const userData = {
                    id: user.uid,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    emailVerified: user.emailVerified,
                };
                dispatch(getUser(userData));
                if (error.message) dispatch({ type: 'CLEAR_ERROR' });
            }
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const loginUserWithProvider = (provider) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const user = await firebaseHelper.loginUserWithProvider(provider);
            if (Object.keys(user).length > 0) {
                const userData = {
                    id: user.uid,
                    name: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                    emailVerified: user.emailVerified,
                };
                dispatch(getUser(userData));
                if (error.message) dispatch({ type: 'CLEAR_ERROR' });
            }
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const registerUserWithEmail = (email, password) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
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
