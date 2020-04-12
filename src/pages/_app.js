import { Provider } from 'react-redux';
import { store } from '../store';
import { firebaseInit } from '../../firebase';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

const theme = {
    primaryColor: '#0DA5F3',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#F3F3F3',
    darkPrimaryColor: '',
    darkSecondaryColor: '',
    darkTertiaryColor: '',
};

const MyApp = ({ pageProps, Component }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Normalize />
                <Component {...pageProps} />
            </ThemeProvider>
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
