import { configureLocalization } from '@lit/localize';
import { sourceLocale, targetLocales } from '../../generated/locale-codes';

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  async loadLocale(locale) {
    return import(`../../generated/locales/${locale}.js`);
  },
});

export const setLocaleFromUrl = async () => {
  const url = new URL(window.location.href);
  const locale = url.searchParams.get('lang') || sourceLocale;

  console.log('setLocaleFromUrl', locale);
  console.log('getLocale', getLocale());
  await setLocale(locale);
};

function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export const localeNames = {
  en: `${getFlagEmoji('US')} English`,
  id: `${getFlagEmoji('ID')} Indonesia`,
  cn: `${getFlagEmoji('CN')} 中国`
};
