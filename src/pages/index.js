import Link from 'next/link';
import { connect } from 'react-redux';
import { getUser } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { getFirestore, User } from '../../firebase';

const Home = ({ users, getUser, user }) => {
    const setUser = () => {
        console.log(user);
        getUser(users[0]);
    };

    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
            <button onClick={setUser}>Select ME</button>
            <Link href={'/about'}>
                <a>About</a>
            </Link>
            <h1>Selected UserName: {user ? user.name : ''} </h1>
        </div>
    );
};

Home.propTypes = {
    users: PropTypes.array,
};

Home.getInitialProps = async () => {
    const user = new User(getFirestore());
    let users = [];
    if (user) {
        users = await user.getUser();
    }
    return { users };
};

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
