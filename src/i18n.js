import i18n, { init } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import I18NextHttpBackend from "i18next-http-backend";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    debug: "true",
    fallBackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          mainHeading: "Job Portal",
        },
      },
      ur: {
        translation: {
          mainHeading: "جاب پورٹل",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });
