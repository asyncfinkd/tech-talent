import * as yup from "yup";

export const RegisterCandidateInfoSchema = yup
  .object()
  .shape({
    fullName: yup.string().trim(),
    phone: yup.string().trim(),
    socialNetwork: yup.string().trim(),
  })
  .required();
