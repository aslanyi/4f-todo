import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store';

const theme = {
    primaryColor: '#0DA5F3',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#F3F3F3',
    darkPrimaryColor: '',
    darkSecondaryColor: '',
    darkTertiaryColor: '',
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
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default withRedux(makeStore)(MyApp);
