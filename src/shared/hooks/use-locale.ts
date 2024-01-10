import { useRouter } from 'next/router';

import { getLocale, locales } from '../data/locales';

export const useLocale = (
  homeLocale: Record<(typeof locales)[number], Record<string, string>>
) => {
  const { locale, defaultLocale } = useRouter();

  return getLocale(locale, defaultLocale, homeLocale);
};
