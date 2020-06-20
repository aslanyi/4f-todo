const firebaseUser = (currentUser) => {
    if (!currentUser) return {};
    return {
        id: currentUser.uid,
        name: currentUser.displayName,
        photoURL: currentUser.photoURL,
        email: currentUser.email,
        emailVerified: currentUser.emailVerified,
    };
};

export default firebaseUser;
