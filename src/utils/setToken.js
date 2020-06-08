import { firebase } from '../../firebase';
import { setCookie } from 'nookies';

let ctx = null;

export default () => {
    if (firebase.auth().currentUser) {
        firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((token) => {
                console.log('new token created', ctx);
                setCookie(ctx, 'idToken', token);
            });
    }
};

export const setCtx = (context) => {
    if (!ctx) {
        ctx = context;
        console.log('context created');
    }
};
