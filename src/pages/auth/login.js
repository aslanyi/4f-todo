import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { loginUserWithEmail, loginUserWithProvider } from '../../redux/actions';
import { GoogleAuthProvider } from '../../../firebase/providers';

const Login = ({ ctx }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((state) => state.error.message);
    const router = useRouter();

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
        dispatch(await loginUserWithEmail(email, password, router));
    };

    const loginUserWithGoogleAuth = async () => {
        dispatch(await loginUserWithProvider(GoogleAuthProvider));
    };

    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" onChange={handleInputChange} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleInputChange} />
            <button onClick={() => loginUser()}>Sign In User</button>
            <button onClick={() => loginUserWithGoogleAuth()}>Sign In With Google</button>
            {error && <span>{error}</span>}
        </div>
    );
};

export default Login;
