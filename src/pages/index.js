import { Wrapper } from '../styles/home/styled';
import Input from '../components/Input';
import Flex from '../components/Layouts/Flex';
import Grid from '../components/Layouts/Grid';
import { Fragment } from 'react';

const Home = (props) => {
    return (
        <Fragment>
            <Flex.Container>
                <Flex.Item>
                    <Wrapper>
                        <h1>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus nemo nihil nostrum nulla officia pariatur perspiciatis praesentium
                            provident qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum! Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem ratione reiciendis. Amet animi autem culpa deserunt
                            dolorem, enim id, laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
                        </h1>
                    </Wrapper>
                </Flex.Item>
            </Flex.Container>
            <Flex.Container>
                <Flex.Item>
                    <Wrapper>Components</Wrapper>
                </Flex.Item>
            </Flex.Container>
            <Flex.Container minWidth="100%">
                <Flex.Item>
                    <Input placeholder="Validation true basic" isValid={true} />
                    <Input placeholder="With icon" icon="home" isValid={undefined} />
                    <Input placeholder="Search input w-100" icon="search" searchInput isValid={undefined} />
                    <Input placeholder="Validation false with icon" isValid={false} icon="home" />
                </Flex.Item>
            </Flex.Container>
        </Fragment>
    );
};

Home.propTypes = {};

Home.getInitialProps = async ({ store }) => {
    return {};
};

export default Home;
