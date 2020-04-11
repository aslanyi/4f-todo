import Link from "next/link";
import {getFirestore, User} from "../firebase";

const Home = ({ users })  => {
    return (
        <div>
            <ul>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ul>
            {/*<button onClick={handleAddData}>ADD ME</button>*/}
            <Link href={'/about'}>
                <a>About</a>
            </Link>
        </div>
    )
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
