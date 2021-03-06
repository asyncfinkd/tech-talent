import * as yup from "yup";

export const ForgotSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .trim()
      .required("Valid email is required")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Valid email is required"
      ),
  })
  .required();
