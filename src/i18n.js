import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translations.json';
import deTranslation from './locales/de/translations.json';
import itTranslation from './locales/it/translations.json';
import slTranslation from './locales/sl/translations.json';
import plTranslation from './locales/pl/translations.json';
import trTranslation from './locales/tr/translations.json';
import esTranslation from './locales/es/translations.json';
import hiTranslation from './locales/hi/translations.json';
import viTranslation from './locales/vi/translations.json';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en', // use en if detected lng is not available
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    resources: {
      en: {
        translations: enTranslation
      },
      de: {
        translations: deTranslation
      },
      it: {
        translations: itTranslation
      },
      sl: {
        translations: slTranslation
      },
      pl: {
        translations: plTranslation
      },
      tr: {
        translations: trTranslation
      },
      es: {
        translations: esTranslation
      },
      hi: {
        translations: hiTranslation
      },
      vi: {
        translations: viTranslation
      }
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations'
  });

export default i18n;
