import { Roboto } from 'next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '@/shared/scss/main.scss';

import { GoogleAnalytics } from '@/shared/components/google-analytics';

const roboto = Roboto({ weight: ['300', '400', '500'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <main className={roboto.className}>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </main>
    </>
  );
}
