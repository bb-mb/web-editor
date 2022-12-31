import '@/styles/normalize.css';
import '@/styles/custom.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>web editor</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
