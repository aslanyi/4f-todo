import Document, { Head, Main, Html, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const styleSheet = new ServerStyleSheet();
        const page = ctx.renderPage((App) => (props) => styleSheet.collectStyles(<App {...props} />));

        const styleTags = styleSheet.getStyleElement();

        return { ...page, styleTags };
    }

    render() {
        const { styleTags } = this.props;
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
                    {styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
