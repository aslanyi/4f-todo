import { Provider } from 'react-redux';
import { store } from '../store';
import { firebaseInit } from '../../firebase';

const MyApp = ({ pageProps, Component }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />;
        </Provider>
    );
};

MyApp.getInitialProps = async ({ ctx, Component }) => {
    firebaseInit();
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default MyApp;
