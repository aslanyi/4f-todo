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
     * @return {object} obj
     * */
    const addDoc = async (collectionName, data) => {
        let obj = {};
        try {
            if (firestore) {
                const docRef = await firestore.collection(collectionName).add(data);
                const docData = await docRef.get();
                obj = { id: docRef.id, ...docData.data() };
            }
        } catch (e) {
            console.log(e);
        }
        return obj;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @param {object} data
     * @return {boolean} isUpdated
     * */
    const updateDoc = async (collectionName, docName, data) => {
        let isUpdated = true;
        try {
            if (firestore) {
                await firestore.collection(collectionName).doc(docName).update(data);
            }
        } catch (e) {
            console.log(e);
            isUpdated = false;
        }
        return isUpdated;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @return {boolean} isDeleted
     * */
    const deleteDoc = async (collectionName, docName) => {
        let isDeleted = true;
        try {
            if (firestore) {
                await firestore.collection(collectionName).doc(docName).delete();
            }
        } catch (e) {
            console.log(e);
            isDeleted = false;
        }
        return isDeleted;
    };

    /**
     * @param {string} collectionName
     * @return {array} data
     * */
    const getCollection = async (collectionName) => {
        const data = [];
        try {
            if (firestore) {
                const querySnapshot = await firestore.collection(collectionName).get();
                querySnapshot.forEach((doc) => (data.push(doc.data())));
            }
        } catch (e) {
            console.log(e);
        }
        return data;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @return {array} data
     * */
    const getDoc = async (collectionName, docName) => {
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
            console.log(e);
        }
        return data;
    };

    /**
     * @param {string} email
     * @param {string} password
     * @return {object} data
     * */
    const loginUserWithEmailPassword = async (email, password) => {
        let data = {};
        try {
            if (auth) {
                const { user } = await auth.signInWithEmailAndPassword(email, password);
                data = user;
            }
        } catch (e) {
            throw new Error(e.message);
        }
        return data;
    };

    /**
     * @param {object} provider
     * @return {object} data
     * */
    const loginUserWithProvider = async (provider) => {
        let data = {};
        try {
            if (auth) {
                const { user } = await auth.signInWithPopup(provider);
                data = user;
            }
        } catch (e) {
            console.error(e);
        }
        return data;
    };

    /**
     * @param {string} email
     * @param {string} password
     * @return {boolean} registered
     * */
    const registerUserWithEmailPassword = async (email, password) => {
        let registered = false;
        try {
            if (auth) {
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                registered = true;
                await user.sendEmailVerification(); // We have to send redirect url but we cant try this with localhost.
            }
        } catch (e) {
            registered = false;
            console.error(e);
        }
        return registered;
    };


    return {
        addDoc,
        getDoc,
        updateDoc,
        deleteDoc,
        getCollection,
        loginUserWithEmailPassword,
        loginUserWithProvider,
        registerUserWithEmailPassword,
    };
}

FirebaseHelper.singleton = (() => {
    let instance;
    function createInstance(firestore, auth) {
        const object = new FirebaseHelper(firestore, auth);
        return object;
    }
 
    return {
        getInstance: function (firestore, auth) {
            if (!instance) {
                instance = createInstance(firestore, auth);
            }
            return instance;
        },
    };
})();


export default FirebaseHelper;
