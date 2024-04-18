import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import de from './locales/de/translation.json';
import en from './locales/en/translation.json';
import pl from './locales/pl/translation.json';
import ua from './locales/ua/translation.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    lng: 'ua',
    resources: {
      en: en,
      ua: ua,
      pl: pl,
      de: de,
    },
    nsSeparator: '.',
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
