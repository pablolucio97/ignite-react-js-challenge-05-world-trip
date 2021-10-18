//eslint-disable-next-line
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDoducment extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/*eslint-disable-next-line */}
                    <title>World Trip</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;1,500&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}