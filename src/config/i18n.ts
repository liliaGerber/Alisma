import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from "../assets/translations/en/translations.json";
import translationsDE from "../assets/translations/de/translations.json";
import translationsFR from "../assets/translations/fr/translations.json";


const resources = {
    en: {
        translation: translationsEN
    },
    de: {
        translation: translationsDE
    },
    fr: {
        translation: translationsFR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'de', 'fr'],
        resources: resources,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {escapeValue: false},
        react: {
            bindI18n: 'loaded languageChanged',
            bindI18nStore: 'added',
            useSuspense: true,
        },
    });
export default i18n;
