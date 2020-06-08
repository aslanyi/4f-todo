const admin = require('../../../firebase/admin');

export default async (req, res) => {
    if (req.body && req.body.idToken) {
        const { idToken } = req.body;
        let response;
        try {
            response = await admin.auth().verifyIdToken(idToken);
        } catch (error) {
            throw new Error(error.code);
        }
        return res.status(200).json({ response });
    }
    return res.status(404).json({ error: 'Req.body undefined' });
};
