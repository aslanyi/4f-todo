import { GET_USER } from './types';

const initialState = {
    id: '',
    name: '',
    surname: '',
    email: '',
    emailVerified: false,
    photoURL: '',
    todos: [],
    token: '',
    categories: [],
};

export function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
