import * as yup from "yup";

export const schema = yup
  .object()
  .shape({
    companyName: yup.string().trim().required("Provide company name"),
    industry: yup.string().trim(),
    phone: yup.string().trim(),
    website: yup.string().trim(),
  })
  .required();
