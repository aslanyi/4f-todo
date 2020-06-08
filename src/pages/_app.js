import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from '../utils/globalStyle';
import { parseCookies } from 'nookies';

import { verifyToken } from '../redux/user/actions';
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

const authHandler = async (token, ctx) => {
    console.log('token', token);
    if (token) {
        ctx.store.dispatch(await verifyToken(token));
        return;
    }
    if (ctx.req && !ctx.pathname.includes('login')) {
        ctx.res.writeHead(302, { Location: '/auth/login' });
        ctx.res.end();
        return;
    }
};

firebaseInit();

let persistor;

const MyApp = ({ pageProps, Component, store }) => {
    if (!persistor) persistor = persistStore(store);

    if (store.getState().user.isTokenExpired) {
        setToken();
    }

    return (
        <Provider store={store}>
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
    const { idToken, a } = parseCookies(ctx);

    setCtx(ctx);
    
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    console.log('initialize');

    authHandler(idToken, ctx);

    return { pageProps };
};

export default withRedux(makeStore)(MyApp);
