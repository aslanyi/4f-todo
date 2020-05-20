import * as types from './types';

const initialState = {
    message: '',
};

export const error = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ERROR:
            return { ...state, ...action.payload };
        case types.CLEAR_ERROR:
            return { message: '' };
        default:
            return state;
    }
};
