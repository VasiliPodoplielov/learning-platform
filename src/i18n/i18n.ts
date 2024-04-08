import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next  } from 'react-i18next';

import en from './locales/en/translation.json';
import ua from './locales/ua/translation.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      ua: ua,
    },
    fallbackLng: 'en',
    nsSeparator: '.',
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });