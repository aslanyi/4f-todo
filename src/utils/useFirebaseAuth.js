import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { firebaseUser, getAuth } from '@firebase/index';
export default function () {
    const [user, setCurrentUser] = useState(getAuth().currentUser);
    const router = useRouter();
    const handleStateChange = (user) => {
        const currentUser = { ...firebaseUser(user), auth: !!user };
        if (user) {
            setCurrentUser(currentUser);
            return;
        }
        setCurrentUser(currentUser);
        if (!router.pathname.includes('login')) router.push('/auth/login');
    };

    useEffect(() => {
        const subscribe = getAuth().onAuthStateChanged(handleStateChange);
        return () => subscribe();
    }, []);

    return user;
}
