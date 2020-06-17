import { Normalize } from 'styled-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@utils/globalStyle';
import withReduxStore from '@components/withReduxStore';
import { firebaseInit } from '@firebase/index';

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

firebaseInit();

let persistor;

const MyApp = ({ pageProps, Component, store }) => {
    persistor = persistor ?? persistStore(store);
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

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

MyApp.propTypes = {
    pageProps: PropTypes.object,
    Component: PropTypes.func,
    store: PropTypes.object,
};

export default withReduxStore(MyApp);
