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
      LOGINPAGESTITLE: "Welcome | Tech Talent",
      REGISTERPAGESTITLE: "Register | Tech Talent",
      FORGOTPAGESTITLE: "Forgot Password? | Tech Talent",
      FORGOTTHANKSPAGESTITLE:
        "Password reset process is completed | Tech Talent",
      WELCOMEBACK: "Welcome Back",
      FORGOTPASSWORD: "Forgot Password?",
      INCORRECTEMAILORPASSWORD: "Incorrect email or password",
      LOADING: "Loading",
      ENTERYOUREMAIL: "Enter Your Email",
      EMAILDOESNOTEXIST: "Email does not exist",
      SENDPASSWORDRESETEMAIL: "Send password reset email",
      PASSWORDRESETISCOMPLETED: "Password reset process is completed",
      CHECKYOUREMAIL: "Check your email and open the password reset link",
      DOYOUWANTOJOIN:
        "Do you want to join <br /> the <span>Tech Talent</span> platform?",
      SUBMITYOURCONTACTINFORMATION:
        "Submit your contact information <br /> and we will contact you shortly",
      REGISTERCOMPANY: "Register Company",
      TERMSANDCONDITIONS: "Terms & Conditions",
      PRIVACYPOLICY: "Privacy Policy",
      SELECTPROFFESION: "Select profession",
      CONTACT__INFORMATION: "Contact Information",
      SAVE: "Save",
      INFORMATION__NAV: "Information",
      RESUME__NAV: "Resume",
      SECURITY__NAV: "Security",
      MYJOBAPPLICATIONS__NAV: "My Job Applications",
      COMPANIESIFOLLOW__NAV: "Companies I Follow",
      JOBSFORME__NAV: "Jobs For Me",
      LOGOUT__NAV: "Logout",
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
      LOGINPAGESTITLE: "გამარჯობა | Tech Talent",
      REGISTERPAGESTITLE: "რეგისტრაცია | Tech Talent",
      FORGOTPAGESTITLE: "დაგავიწყდა პაროლი? | Tech Talent",
      FORGOTTHANKSPAGESTITLE: "პაროლის აღდგენა დასრულებულია | Tech Talent",
      WELCOMEBACK: "გამარჯობა",
      FORGOTPASSWORD: "დაგავიწყდა პაროლი?",
      INCORRECTEMAILORPASSWORD: "მეილი ან პაროლი არასწორია",
      LOADING: "იტვირთება",
      ENTERYOUREMAIL: "შეიყვანე მეილი",
      EMAILDOESNOTEXIST: "მეილი არ არის რეგისტრირებული",
      SENDPASSWORDRESETEMAIL: "გამომიგზავნე პაროლის აღდგენის მეილი",
      PASSWORDRESETISCOMPLETED: "პაროლის აღდგენა დასრულებულია",
      CHECKYOUREMAIL: "შეიამოწმე მეილი და გახსენი პაროლის აღდგენის ლინკი",
      DOYOUWANTOJOIN: "გინდა შემოუერთდე <br /> ჩვენს პლატფორმას?",
      SUBMITYOURCONTACTINFORMATION:
        "შეავსე რეგისტრაციის ფორმა <br /> და ჩვენ მალე დაგიკავშირებით",
      REGISTERCOMPANY: "კომპანიის რეგისტრაცია",
      TERMSANDCONDITIONS: "წესები და პირობები",
      PRIVACYPOLICY: "კონფიდენციალურობა",
      SELECTPROFFESION: "აირჩიეთ პროფესია",
      CONTACT__INFORMATION: "საკონტაქტო ინფორმაცია",
      SAVE: "შენახვა",
      INFORMATION__NAV: "ინფორმაცია",
      RESUME__NAV: "რეზიუმე",
      SECURITY__NAV: "უსაფრთხოება",
      MYJOBAPPLICATIONS__NAV: "ჩემი განცხადებები",
      COMPANIESIFOLLOW__NAV: "კომპანიები",
      JOBSFORME__NAV: "ვაკანსიები ჩემთვის",
      LOGOUT__NAV: "გამოსვლა",
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
