import * as types from './types';

export const getUser = (user) => {
    return {
        type: types.GET_USER,
        payload: user,
    };
};

export const updateUser = (user) => {
    return {
        type: types.UPDATE_USER,
        payload: user,
    };
};
