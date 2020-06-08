import { Wrapper } from '../styles/home/styled';
import { Fragment } from 'react';
import Input from '../components/Input';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { setCookie } from 'nookies';

const Home = (props) => {
    const user = useSelector((state) => state.user);
    return (
        <Fragment>
            <Wrapper>
                {user.name}
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
            </div>
        </Fragment>
    );
};

Home.getInitialProps = (ctx) => {
    console.log('home');
    setCookie(ctx, 'a', 'b');
    return {};
}

export default Home;
