import { Html, Head, Main, NextScript } from "next/document";


const Document = () => {

    return (
        <Html>
            <Head>
                <meta name="Title for All The page" content="Welcome" />
            </Head>
            <body className="bg-secondary text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document