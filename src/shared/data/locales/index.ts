export const locales = ['en-us', 'pt-br'] as const;

export const getLocale = <
  T extends Record<(typeof locales)[number], Record<string, string>>
>(
  locale: string | undefined,
  defaultLocale: string | undefined,
  object: T
) => {
  const localeTyped = locale as (typeof locales)[number] | undefined;
  const defaultLocaleTyped = defaultLocale as (typeof locales)[number];

  return object[localeTyped || defaultLocaleTyped];
};
