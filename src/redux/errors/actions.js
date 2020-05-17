import * as types from './types';

export const setError = (error) => {
    return {
        type: types.SET_ERROR,
        payload: error,
    };
};
