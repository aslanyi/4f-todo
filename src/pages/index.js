import Link from 'next/link';
import { PropTypes } from 'prop-types';
import { getFirestore, User } from '../../firebase';

const Home = ({ users }) => {
    return (
        <div>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
            {/*<button onClick={handleAddData}>ADD ME</button>*/}
            <Link href={'/about'}>
                <a>About</a>
            </Link>
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

export default Home;
