export const Form = {
  Fields: [
    {
      name: "email",
      type: "text",
      title: "Email",
      required: {
        message: "Valid email is required",
      },
      props: true,
    },
    {
      name: "password",
      type: "password",
      title: "Password",
      required: {
        message: "Password is required",
      },
    },
    {
      name: "repeatPassword",
      type: "password",
      title: "Repeat Password",
      required: {
        message: "Passwords do not match",
      },
    },
  ],
};
