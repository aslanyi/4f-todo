import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserWithEmail, loginUserWithProvider } from '../../redux/actions';
import { GoogleAuthProvider } from '../../../firebase/providers';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

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
        dispatch(await loginUserWithEmail(email, password));
    };

    const loginUserWithGoogleAuth = async () => {
        dispatch(await loginUserWithProvider(GoogleAuthProvider));
    };

    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' onChange={handleInputChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleInputChange}/>
            <button onClick={() => loginUser()}>Sign In User</button>
            <button onClick={() => loginUserWithGoogleAuth()}>Sign In With Google</button>
        </div>
    );
};

export default Login;
