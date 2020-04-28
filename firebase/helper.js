//TODO singleton

/**
 * Represent a helper for manage data
 * @constructor
 * @param {object} firestore
 * */
function FirebaseHelper(firestore) {

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
                    data =  { id: docRef.id, ...docRef.data() };
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
