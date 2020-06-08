const admin = require('firebase-admin');
if (!(admin.apps.length > 0)) {
    admin.initializeApp({ credential: admin.credential.applicationDefault(), databaseURL: process.env.DATABASE_URL });
}
module.exports = admin;
