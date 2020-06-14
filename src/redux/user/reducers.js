import { GET_USER, CLEAR_USER } from './types';

const initialState = {
    id: '',
    name: '',
    surname: '',
    email: '',
    emailVerified: false,
    photoURL: '',
    auth: false,
    todos: [],
    categories: [],
};

export function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                ...action.payload,
            };
        case CLEAR_USER:
            return { ...initialState };
        default:
            return state;
    }
}
