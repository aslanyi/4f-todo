import { useState } from 'react';
import { getAuth, firebase } from '../../../firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        const name = e.target.name;
        switch (name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
        }
    };

    const loginUser = async () => {
        try {
           const { user } = await getAuth().signInWithEmailAndPassword(email, password);
        } catch (e) {
            console.log(e.message);
        }
    };

    const loginUserWithGoogleAuth = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const { user } = await getAuth().signInWithPopup(provider);
            console.log(user);
        } catch (e) {
            console.log(e.message);
        }
    };


    const loginUserWithFacebookAuth = async () => {
        try {
            const provider = new firebase.auth.FacebookAuthProvider();
            const { user } = await getAuth().signInWithPopup(provider);
            console.log(user);
        } catch(e) {
            console.log(e.message);
        }
    }

    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' onChange={handleInputChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleInputChange}/>
            <button onClick={() => loginUser()}>Sign In User</button>
            <button onClick={() => loginUserWithGoogleAuth()}>Sign In With Google</button>
            <button onClick={() => loginUserWithFacebookAuth()}>Sign In With Facebook</button>
        </div>
    );
};

export default Login;
