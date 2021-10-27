export const LoginInputs = {
  Fields: [
    {
      name: "email",
      type: "text",
      title: "Email",
      required: {
        value: true,
        message: "Valid email is required",
      },
      //   validation: function (val) {
      //     return val.length >= 5 || "Min Length is 5";
      //   },
    },
    {
      name: "password",
      type: "password",
      title: "Password",
      required: {
        value: true,
        message: "Password is required",
      },
      //   validation: function (val) {
      //     return val.length >= 5 || "Min Length is 5";
      //   },
    },
  ],
};
