import { useState } from 'react';
import { getAuth } from '../../../firebase';
import { useDispatch } from 'react-redux';
import { registerUserWithEmail } from '../../redux/actions';

const Register = () => {
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

    const registerUser = async () => {
        dispatch(await registerUserWithEmail(email, password));
    };
    return (
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' onChange={handleInputChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handleInputChange}/>
            <button onClick={() => registerUser()}>Create User</button>
        </div>
    );
};

export default Register;
