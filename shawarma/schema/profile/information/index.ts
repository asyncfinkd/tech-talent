import * as yup from "yup";

export const ProfileInformationFormSchema = yup.object().shape({
  fullName: yup.string().trim(),
  phone: yup.string().trim(),
  socialNetwork: yup.string().trim(),
});
