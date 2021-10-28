export const LoginInputs = {
  Fields: [
    {
      name: "email",
      type: "text",
      title: "Email",
      required: {
        message: "Valid email is required",
      },
    },
    {
      name: "password",
      type: "password",
      title: "Password",
      required: {
        message: "Password is required",
      },
    },
  ],
};
