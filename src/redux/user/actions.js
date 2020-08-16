import { FirebaseHelper, errorMessages, getAuth, getFirestore, firebase } from '@firebase/index';
import * as collectionName from '@firebase/constans';

import { setError } from '@redux/actions';
import * as types from '@redux/user/types';

export const getUser = (user) => {
    return {
        type: types.GET_USER,
        payload: user,
    };
};

export const clearUser = () => {
    return {
        type: types.CLEAR_USER,
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

export const loginUserWithEmail = (email, password, router, persistence = firebase.auth.Auth.Persistence.NONE) => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const response = await firebaseHelper.loginUserWithEmailPassword(email, password, persistence);
            if (Object.keys(response).length > 0) {
                if (error.message) dispatch({ type: 'CLEAR_ERROR' });
                router.push('/');
            }
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const loginUserWithProvider = (provider, router) => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            const response = await firebaseHelper.loginUserWithProvider(provider);
            if (Object.keys(response).length > 0) {
                if (error.message) dispatch({ type: 'CLEAR_ERROR' });
                router.push('/');
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
            await firebaseHelper.registerUserWithEmailPassword(email, password);
            if (error.message) dispatch({ type: 'CLEAR_ERROR' });
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const logoutUser = () => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error } = getState();
            await firebaseHelper.signOutUser();
            dispatch(clearUser());
            if (error.message) dispatch({ type: 'CLEAR_ERROR' });
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};

export const sendResetPassword = () => {
    const firebaseHelper = FirebaseHelper.singleton(getFirestore(), getAuth());
    return async (dispatch, getState) => {
        try {
            const { error, user } = getState();
            await firebaseHelper.sendResetPassword(user.email);
            if (error.message) dispatch({ type: 'CLEAR_ERROR' });
        } catch (error) {
            dispatch(setError({ message: errorMessages[error.message] }));
        }
    };
};
