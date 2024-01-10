/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: { 
    remotePatterns: [
      {protocol: "https", hostname: "**"}
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'shared', 'scss')],
  },
  i18n: {
    locales: ["en-us", "pt-br"],
    defaultLocale: "pt-br",
  },
  async redirects() {
    return [
      {
        source: '/img/:path*',
        destination: `${process.env.NEXT_PUBLIC_ASSETS_URL}/img/:path*`,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
