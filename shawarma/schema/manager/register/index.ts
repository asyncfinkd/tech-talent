import * as yup from "yup";

export const ManagerRegisterSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .trim()
      .required("Valid email is required")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "User with this email is already registered"
      ),
    password: yup.string().required("Password is required"),
    repeatPassword: yup
      .string()
      .required("Passwords do not match")
      .oneOf([yup.ref("password"), null], "Passwords do not match"),
  })
  .required();
