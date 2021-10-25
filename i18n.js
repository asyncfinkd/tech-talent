import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

if (typeof window !== "undefined") {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: window.localStorage.getItem("i18nextLng") || "en",
      debug: true,
      detection: {
        order: ["queryString", "cookie"],
        cache: ["cookie"],
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
        wait: true,
      },
    });
}

export default i18n;
