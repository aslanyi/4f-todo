import Document, {Head, Main, Html, NextScript} from 'next/document';

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx);
    //     return {...initialProps}
    // }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                    {/*<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js" />*/}
                    {/*<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-firestore.js" />*/}
                </body>
            </Html>
        )
    }
}

export default MyDocument;
