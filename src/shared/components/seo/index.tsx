import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta name="theme-color" content="#000" />
    </Head>
  );
};
