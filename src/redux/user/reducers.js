import { GET_USER, UPDATE_USER } from './types';

const initialState = {
    id: '',
    name: '',
    surname: '',
    mail: '',
    photoUrl: '',
    todos: [],
};

export function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                ...action.payload,
            };
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
