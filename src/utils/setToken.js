import { firebase } from '../../firebase';
import Cookies from 'js-cookie';

export default async () => {
    if (typeof window !== 'undefined') {
        if (firebase.auth().currentUser) {
            const token = await firebase.auth().currentUser.getIdToken(true);
            Cookies.set('idToken', token);
            return;
        }
        window.location.href = '/auth/login';
    }
};
