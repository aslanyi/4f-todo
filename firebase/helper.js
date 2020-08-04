/**
 * Represent a helper for manage data
 * @constructor
 * @param {object} firestore
 * @param {object} auth
 * */
function FirebaseHelper(firestore, auth) {
    /**
     * @param {string} collectionName
     * @param {array} data
     * @returns {object} obj
     * */
    this.addDoc = async (collectionName, data) => {
        let obj = {};
        try {
            if (firestore) {
                const docRef = await firestore.collection(collectionName).add(data);
                const docData = await docRef.get();
                obj = { id: docRef.id, ...docData.data() };
            }
        } catch (e) {
            throw new Error(e.code);
        }
        return obj;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @param {object} data
     * @returns {boolean} isUpdated
     * */
    this.updateDoc = async (collectionName, docName, data) => {
        let isUpdated = true;
        try {
            if (firestore) {
                await firestore.collection(collectionName).doc(docName).update(data);
            }
        } catch (e) {
            isUpdated = false;
            throw new Error(e.code);
        }
        return isUpdated;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @returns {boolean} isDeleted
     * */
    this.deleteDoc = async (collectionName, docName) => {
        let isDeleted = true;
        try {
            if (firestore) {
                await firestore.collection(collectionName).doc(docName).delete();
            }
        } catch (e) {
            isDeleted = false;
            throw new Error(e.code);
        }
        return isDeleted;
    };

    /**
     * @param {string} collectionName
     * @returns {array} data
     * */
    this.getCollection = async (collectionName) => {
        const data = [];
        try {
            if (firestore) {
                const querySnapshot = await firestore.collection(collectionName).get();
                querySnapshot.forEach((doc) => data.push(doc.data()));
            }
        } catch (e) {
            throw new Error(e.code);
        }
        return data;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @returns {array} data
     * */
    this.getDoc = async (collectionName, docName) => {
        let data = {};
        try {
            if (firestore) {
                const docRef = await firestore.collection(collectionName).doc(docName).get();
                if (docRef.exists) {
                    data = { id: docRef.id, ...docRef.data() };
                } else {
                    console.log('Doc is not found');
                }
            }
        } catch (e) {
            throw new Error(e.code);
        }
        return data;
    };

    /**
     * @param {string} email
     * @param {string} password
     * @returns {object} data
     * */
    this.loginUserWithEmailPassword = async (email, password, persistType) => {
        let data = {};
        try {
            if (auth) {
                // Persistence added for remember me feature. It persists user state or not depends on user choice.
                const { user } = await auth.setPersistence(persistType).then(() => {
                    return auth.signInWithEmailAndPassword(email, password);
                });
                data = user;
            }
        } catch (e) {
            throw new Error(e.code);
        }
        return data;
    };

    /**
     * @param {object} provider
     * @returns {object} data
     * */
    this.loginUserWithProvider = async (provider) => {
        let data = {};
        try {
            if (auth) {
                const { user } = await auth.signInWithPopup(provider);
                data = user;
            }
        } catch (e) {
            throw new Error(e.code);
        }
        return data;
    };

    /**
     * @param {string} email
     * @param {string} password
     * @returns {boolean} registered
     * */
    this.registerUserWithEmailPassword = async (email, password) => {
        let registered = false;
        try {
            if (auth) {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                registered = true;
                await user.sendEmailVerification(); // We have to send redirect url but we cant try this with localhost.
            }
        } catch (e) {
            registered = false;
            throw new Error(e.code);
        }
        return registered;
    };

    this.signOutUser = async () => {
        let isSignedOut = false;
        try {
            await auth.signOut();
            isSignedOut = true;
        } catch (error) {
            isSignedOut = false;
            throw new Error(error.code);
        }
        return isSignedOut;
    };

    this.sendPasswordResetEmail = async (email) => {
        let sent = false;
        try {
            await auth.sendPasswordResetEmail(email);
            sent = true;
        } catch (error) {
            sent = false;
            throw new Error(error.code);
        }
        return sent;
    };
}

FirebaseHelper.singleton = (() => {
    let instance;
    function createInstance(firestore, auth) {
        const object = new FirebaseHelper(firestore, auth);
        return object;
    }

    return function (firestore, auth) {
        if (!instance) {
            instance = createInstance(firestore, auth);
        }
        return instance;
    };
})();

export default FirebaseHelper;
