import { USERS } from './constans';

class User {
    constructor(firestore) {
        this.firestore = firestore;
    }

    async getUser() {
        const user = [];
        if (this.firestore) {
            const querySnapshot = await this.firestore.collection(USERS).get();
            querySnapshot.forEach((doc) => {
                user.push(doc.data());
            });
        }
        return user;
    }

    async addUser(user) {
        let isAdded = false;
        if (this.firestore) {
            isAdded = await this.firestore.collection(USERS).add(user);
        }

        return isAdded;
    }
}

/**
 * Represent a helper for manage data
 * @constructor
 * @param {object} firestore
 * */
function FirebaseHelper(firestore) {

    /**
     * @param {string} collectionName
     * @param {array} data
     * */
    const addDoc = async (collectionName, data) => {
        let id = '';
        try {
            if (firestore) {
                const docRef = await firestore.collection(collectionName).add(data);
                id = docRef.id;
            }
        } catch (e) {
            console.log(e);
        }
        return id;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * @param {object} data
     * */
    const updateDoc = async (collectionName, docName, data) => {
        let isAdded = false;
        try {
            if (firestore) {
                isAdded = await firestore.collection(collectionName).doc(docName).update(data);
            }
        } catch (e) {
            console.log(e);
        }
        return isAdded;
    };

    /**
     * @param {string} collectionName
     * @param {string} docName
     * */
    const deleteDoc = async (collectionName, docName) => {
        let isDeleted = false;
        try {
            if (firestore) {
                isDeleted = await firestore.collection(collectionName).doc(docName).delete();
            }
        } catch (e) {
            console.log(e);
        }
        return isDeleted;
    };

    /**
     * @param {string} collectionName
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
     * */
    const getDoc = async (collectionName, docName) => {
        let data = {};
        try {
            if (firestore) {
                const doc = await firestore.collection(collectionName).doc(docName).get();
                if (doc.exists) {
                    data = doc.data();
                } else {
                    console.log('Doc is not found');
                }
            }
        } catch (e) {
            console.log(e);
        }
        return data;
    };

    return {
        addDoc,
        getDoc,
        updateDoc,
        deleteDoc,
        getCollection,
    };
}

export default FirebaseHelper;
