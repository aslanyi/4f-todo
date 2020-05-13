import { Provider } from 'react-redux';
import { firebaseInit } from '../../firebase';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store';

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
    primaryFont:'Poppins',
    secondaryFont:'SF UI Display',
};

const MyApp = ({ pageProps, Component, store }) => {
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

export default withRedux(makeStore)(MyApp);
