export const Form = {
  Fields: [
    {
      name: "fullName",
      title: "First Name & Last Name",
      type: "text",
    },
    {
      name: "email",
      title: "Email",
      type: "text",
      required: {
        message: "Valid email is required",
      },
      props: true,
    },
    {
      name: "password",
      title: "Password",
      type: "password",
      required: {
        message: "Password is required",
      },
    },
    {
      name: "repeatPassword",
      title: "Repeat Password",
      type: "password",
      required: {
        message: "Passwords do not match",
      },
    },
  ],
};
