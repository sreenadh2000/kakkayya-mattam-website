import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// ⬇️ Import translations from src
import en from "./../locales/en/translation.json";
import te from "./../locales/te/translation.json";
i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      te: { translation: te },
    },
    fallbackLng: "en",
    debug: true,
    // backend: {
    //   loadPath: "/locales/{{lng}}/translation.json",  // it will only fetch from public folder
    // },
    supportedLngs: ["en", "te"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
