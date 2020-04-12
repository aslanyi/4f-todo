import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseInit = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(process.env.firebase);
        return firebase;
    }
};

const getFirestore = () => {
    if (firebase.apps.length > 0) return firebase.firestore();
    return null;
};

export { firebaseInit, getFirestore };
