import * as types from './types';
import { FirebaseHelper, getFirestore } from '../../../firebase';
import * as collectionName from '../../../firebase/constans';

const firebaseHelper = new FirebaseHelper(getFirestore());
export const getUser = (user) => {
    return {
        type: types.GET_USER,
        payload: user,
    };
};

export const fetchUser = () => {
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
    return async (dispatch) => {
        try {
            const isUpdated = await firebaseHelper.update(collectionName.USERS, user.id, user);
            if (isUpdated) fetchUser();
        } catch (error) {
            console.error(error);
        }
    };
};

