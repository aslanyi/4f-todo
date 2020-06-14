import { Fragment, useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import withAuth from '../components/withAuth';
import { Wrapper } from '../styles/home/styled';
import { logoutUser } from '../redux/user/actions';

const Home = (props) => {
    const [isChecked, setIsChecked] = useState();
    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const logOut = async () => {
        await dispatch(logoutUser());
    };

    return (
        <Fragment>
            <Wrapper>
                {user.name}
                <button onClick={() => logOut()}>Log out</button>
                <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                    provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt dolorem,
                    enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                </h1>
                <Link href="/auth/login">
                    <a>Login</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </Wrapper>
            <Wrapper>Components</Wrapper>
            <div>
                <Input placeholder="Validation true basic" isValid={true} />
                <Input placeholder="With icon" icon="home" isValid={undefined} />
                <Input placeholder="Search input w-100" icon="search" searchInput isValid={undefined} />
                <Input placeholder="Validation false with icon" isValid={false} icon="home" />
                <Checkbox checked={isChecked} label="This is a checkbox label" onClick={handleClick} />
            </div>
        </Fragment>
    );
};

Home.getInitialProps = (ctx) => {
    return {};
};

export default withAuth(Home);
