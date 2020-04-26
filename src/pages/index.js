import { useEffect } from 'react';
import { getFirestore, FirebaseHelper } from '../../firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Wrapper } from '../styles/home/styled';
import { USERS } from '../../firebase/constans';
import { updateUser } from '../redux/actions';

const Home = (props) => {

    console.log(props);
    return (
        <Wrapper>
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ipsum, rerum! Aliquid, aut beatae
                delectus deserunt dolor dolore esse est, facilis in ipsa itaque laborum laudantium minus molestiae natus
                nemo nihil nostrum nulla officia pariatur perspiciatis praesentium provident
                qui quisquam recusandae reiciendis rem saepe sapiente sequi suscipit tenetur velit veritatis voluptatum!
                Blanditiis dolor enim est facilis illo inventore ipsum magnam mollitia pariatur perspiciatis qui, quidem
                ratione reiciendis. Amet animi autem culpa deserunt dolorem, enim id,
                laboriosam laudantium maiores, minus nesciunt nisi non odio perspiciatis reprehenderit rerum sed? Atque
                ducimus maiores nesciunt nisi odio odit, saepe ut? Quas quis sunt vitae.
            </h1>
        </Wrapper>
    );
};

Home.propTypes = {};

Home.getInitialProps = async ({ store }) => {
    const fbHelper = new FirebaseHelper(getFirestore());
    const userId = await fbHelper.addDoc(USERS, { name: 'Taha' });
    const user = await fbHelper.getDoc(USERS, userId);
    store.dispatch({type: 'UPDATE_USER', payload: {name: 'AYŞE'}});
    return { user };
};

const mapStateToProps = (state) => ({
    user: state.user,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
