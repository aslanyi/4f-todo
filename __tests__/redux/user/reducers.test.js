import { user } from '../../../src/redux/user/reducers';
import * as types from '../../../src/redux/user/types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        expect(user(undefined, {})).toEqual({
            id: '',
            name: '',
            surname: '',
            email: '',
            emailVerified: false,
            photoURL: '',
            todos: [],
            token: '',
            categories: [],
        });
    });
});
