import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Allura-Regular.ttf"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/OpenSansCondensed-Bold.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
