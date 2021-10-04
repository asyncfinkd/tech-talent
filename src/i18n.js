import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      JOBS: "Jobs",
      COMPANIES: "Companies",
      COURSES: "Courses",
      EDUCATION: "Education",
      LOGIN: "Login",
      REGISTER: "Register",
      ABOUT: "About",
      LANGUAGE: "Language",
    },
  },
  ka: {
    translation: {
      JOBS: "ვაკანსიები",
      COMPANIES: "კომპანიები",
      COURSES: "კურსები",
      EDUCATION: "განათლება",
      LOGIN: "შესვლა",
      REGISTER: "რეგისტრაცია",
      ABOUT: "ჩვენს შესახებ",
      LANGUAGE: "ენა",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: `${localStorage.getItem("tt-lang") || "en"}`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
