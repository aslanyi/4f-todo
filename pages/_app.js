import { firebaseInit } from '../firebase';

const MyApp = ({pageProps, Component}) => {
    return (
        <Component {...pageProps}  />
    )
};

MyApp.getInitialProps = async ({ctx, Component}) => {
    firebaseInit();
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default MyApp;
