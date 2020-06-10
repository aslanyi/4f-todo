import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from '../utils/globalStyle';
import { parseCookies } from 'nookies';
import Cookies from 'js-cookie';
import withReduxStore from '../components/withReduxStore';
import { verifyIdToken } from '../redux/actions';
import { firebaseInit } from '../../firebase';
import setToken, { setCtx } from '../utils/setToken';

const theme = {
    primaryColor: '#0DA5F3',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#F3F3F3',
    textColor: '#151522',
    placeholderColor: '#999999',
    borderColor: '#E4E4E4',
    successColor: '#00C48C',
    dangerColor: '#FF647C',
    darkPrimaryColor: '',
    darkSecondaryColor: '',
    darkTertiaryColor: '',
    primaryFont: 'Poppins',
    secondaryFont: 'SF UI Display',
};

const isServer = () => typeof window === 'undefined';


const authHandler = async (token, ctx) => {
    if (token) {
        await ctx.reduxStore.dispatch(verifyIdToken(token));
        return;
    }
    if (ctx.req && !ctx.pathname.includes('login') && isServer()) {
        ctx.res.writeHead(302, { Location: '/auth/login' });
        ctx.res.end();
        return;
    } else if (!isServer()) {
        window.location.href = '/auth/login';
    }
};

firebaseInit();

let persistor;

const MyApp = ({ pageProps, Component, reduxStore }) => {
    if (!persistor) persistor = persistStore(reduxStore);

    if (reduxStore.getState().user.isTokenExpired) {
        setToken();
    }

    return (
        <Provider store={reduxStore}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Normalize />
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    );
};

MyApp.getInitialProps = async ({ ctx, Component }) => {
    let pageProps = {};
    let token;
    
    if (isServer()) {
        const { idToken } = parseCookies(ctx);
        token = idToken;
    } else {
        token = Cookies.get('idToken');
    }

    await authHandler(token, ctx);

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

export default withReduxStore(MyApp);
