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
      GUEST: "Guest",
      INACTIVE: "Inactive",
      CHOOSELINKFIELDOFINTEREST: "Choose Link field of interest",
      OTHER: "Other",
      COMPANY: "Company",
      ENTERYOURCREDENTIALS: "Enter Your Credentials",
      EMAIL: "Email",
      PASSWORD: "Password",
      REPEATPASSWORD: "Repeat Password",
      NEXT: "Next",
      CREATEYOURACCOUNT: "Create Your Account",
      VALIDEMAIL: "Valid email is required",
      VALIDPASSWORD: "Password is required",
      VALIDREPEATPASSWORD: "Passwords do not match",
      VALIDALREADYREGISTERED: "User with this email is already registered",
      CONTACTINFORMATION: "Contact Information",
      SUBCONTACTINFORMATION: "You can use this data when you apply for a job",
      FULLNAME: "First Name & Last Name",
      PHONE: "Phone",
      EXAMPLE: "ex: ",
      TELLUS: "Tell us who you are",
      CONTACTUS: "Contact Information",
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
      GUEST: "სტუმარი",
      INACTIVE: "არააქტიური",
      CHOOSELINKFIELDOFINTEREST: "აირჩიე სფერო რომელიც გაინტერესებს",
      OTHER: "სხვა",
      COMPANY: "კომპანია",
      ENTERYOURCREDENTIALS: "შეიყვანი შენი ინფორმაცია",
      EMAIL: "მეილი",
      PASSWORD: "პაროლი",
      REPEATPASSWORD: "პაროლის გამეორება",
      NEXT: "შემდეგი",
      CREATEYOURACCOUNT: "შექმენი ანგარიში",
      VALIDEMAIL: "ვალიდური მეილი სავალდებულოა",
      VALIDPASSWORD: "პაროლი სავალდებულოა",
      VALIDREPEATPASSWORD: "პაროლები არ ემთხვევა ერთმანეთს",
      VALIDALREADYREGISTERED: "მომხმარებელი ამ მეილით უკვე დარეგისტრირებულია",
      CONTACTINFORMATION: "საკონტაქტო ინფორმაცია",
      SUBCONTACTINFORMATION:
        "შეგიძლია ეს ინფორმაცია აპლიკაციის შევსების დროს გამოიყენო",
      FULLNAME: "სახელი და გვარი",
      PHONE: "ტელეფონი",
      EXAMPLE: "მაგ: ",
      TELLUS: "მოგვიყევი შენს შესახებ",
      CONTACTUS: "საკონტაქტო ინფორმაცია",
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
