import { publicEnvs } from './public-envs';

export function generateSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    url: 'https://www.b2ml.com.br',
    logo: `${publicEnvs.NEXT_PUBLIC_ASSETS_URL}/img/svg/home/group.svg`,
  };
}
