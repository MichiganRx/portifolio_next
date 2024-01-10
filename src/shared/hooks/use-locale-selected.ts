import { useRouter } from 'next/router';

import { locales } from '../data/locales';

export const useLocaleSelected = () => {
  const { locale, defaultLocale } = useRouter();
  const localeSelected = (locale || defaultLocale) as (typeof locales)[number];

  return localeSelected;
};
