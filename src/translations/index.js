import i18n from "i18next";
import { Constants } from '@constants';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
i18n.init({
    resources: {
        es_AR: {
            translation: require('./locales/es_AR.json')
        },
    },
    lng: Constants.DEFAULT_LOCALE,
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
