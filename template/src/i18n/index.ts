import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ka from './locales/ka.json';

const resources: Resource = {
  en: {
    translation: en,
  },
  ka: {
    translation: ka,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
