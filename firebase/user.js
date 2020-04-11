class User {
    constructor(firestore) {
        this.firestore = firestore;
    }
    async getUser() {
        const user = [];
        if (this.firestore) {
            const querySnapshot = await this.firestore
                .collection('users')
                .get();
            querySnapshot.forEach((doc) => {
                user.push(doc.data());
            });
        }
        return user;
    }

    async addUser(user) {
        let isAdded = false;
        if (this.firestore) {
            isAdded = await this.firestore.collection('users').add(user);
        }

        return isAdded;
    }
}

export default User;
