import { Html, Head, Main, NextScript } from 'next/document';

import { generateSchema } from '@/shared/helpers/generate-schema';
import { publicEnvs } from '@/shared/helpers/public-envs';

export default function Document() {
  const schema = generateSchema();

  return (
    <Html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta property="og:site_name" content="Organic" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.b2ml.com.br" /> */}
        <meta
          property="og:image:alt"
          content="Tecnologia desenvolvendo negócios"
        />
        <meta
          property="og:image"
          content={`${publicEnvs.NEXT_PUBLIC_ASSETS_URL}/img/baner%20para%20compartilhar.png`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
