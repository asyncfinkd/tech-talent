import * as yup from "yup";

export const ProfileSecuritySchema = yup
  .object()
  .shape({
    currentPassword: yup.string().required("Current password is required"),
    newPassword: yup.string().required("New password is required"),
    repeatPassword: yup
      .string()
      .required("Repeat password is required")
      .oneOf([yup.ref("newPassword"), null], "Passwords do not match"),
  })
  .required();
