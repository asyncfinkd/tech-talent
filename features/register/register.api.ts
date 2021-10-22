import env from "application/environment/env.json";
import { Result } from "types/features/register";

export const RegisterRequest = async (
  loginData: {
    email: string;
    password: string;
  },
  interest: string | string[] | undefined
): Promise<Result> => {
  const { email, password } = loginData;
  const response = await fetch(`${env.host}/api/register`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password, role: "member", interest }),
  });

  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    if (error) {
      alert(1);
    }

    return Promise.reject({
      ...error,
    });
  }
};
