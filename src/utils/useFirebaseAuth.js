import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { firebase, firebaseUser } from '../../firebase';
export default function () {
    const [user, setCurrentUser] = useState();
    const router = useRouter();
    const handleStateChange = (user) => {
        const currentUser = { ...firebaseUser(user), auth: !!user };
        if (user) {
            setCurrentUser(currentUser);
            return;
        }
        setCurrentUser(currentUser);
        router.push('/auth/login');
    };

    useEffect(() => {
        const subscribe = firebase.auth().onAuthStateChanged(handleStateChange);
        return () => subscribe();
    }, []);

    return user;
}
