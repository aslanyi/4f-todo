import * as actions from '../../../src/redux/user/actions';
import * as types from '../../../src/redux/user/types';

describe('action tests', () => {
    it('should get user', () => {
        const payload = {
            name: 'Taha',
            surname: 'Tepedelen',
            email: 'tahatepedelen@gmail.com',
        };
        const expectedAction = {
            type: types.GET_USER,
            payload,
        };
        expect(actions.getUser(payload)).toEqual(expectedAction);
    });
});
