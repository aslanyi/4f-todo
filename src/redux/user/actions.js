import * as types from './types';
import { FirebaseHelper, getAuth, getFirestore } from '../../../firebase';
import * as collectionName from '../../../firebase/constans';

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
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateUser = (user) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return async (dispatch) => {
        try {
            const isUpdated = await firebaseHelper.update(collectionName.USERS, user.id, user);
            if (isUpdated) fetchUser();
        } catch (error) {
            console.error(error);
        }
    };
};

export const loginUserWithEmail = (email, password) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return async (dispatch) => {
        try {
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
            }
        } catch (e) {
            console.error(e);
        }
    };
};

export const loginUserWithProvider = (provider) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return async (dispatch) => {
        try {
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
            }
        } catch (e) {
            console.error(e);
        }
    };
};

export const registerUserWithEmail = (email, password) => {
    const firebaseHelper = FirebaseHelper.singleton.getInstance(getFirestore(), getAuth());
    return async (dispatch) => {
        try {
            const isRegistered = await firebaseHelper.registerUserWithEmailPassword(email, password);
            console.log(isRegistered);
        } catch (e) {
            console.error(e);
        }
    };
};
