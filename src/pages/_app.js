import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-calendar/dist/Calendar.css';

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

const MyApp = ({ pageProps, Component, store }) => {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
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

export default withRedux(makeStore)(MyApp);
