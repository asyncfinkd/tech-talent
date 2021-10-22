import * as yup from "yup";

export const RegisterCandidateInfoSchema = yup
  .object()
  .shape({
    fullName: yup.string().trim().required("Typeof"),
    phone: yup.string().trim().required("Typeof"),
    socialNetwork: yup.string().required("Typeof"),
  })
  .required();
