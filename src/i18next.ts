import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import i18next from "i18next";

import VKParams from "./utils/VKParams";

i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
        lng: VKParams.VKLanguage,
        fallbackLng: "en",
        debug: process.env.NODE_ENV !== "production",
        interpolation: {
            escapeValue: false
        },    
        defaultNS: "app",
        lowerCaseLng: true,

        backend: {
            loadPath: "./assets/locales/{{lng}}.json",
        },
    })