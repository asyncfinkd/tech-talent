import env from "application/environment/env.json";
import { Result } from "types/features/login";

export const LoginRequest = async (
  loginData: {
    email: string;
    password: string;
  },
  setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>,
  forUser: boolean
): Promise<Result> => {
  const { email, password } = loginData;
  const response = await fetch(`${env.host}/api/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password, forUser }),
  });
  if (response.ok) setErrorMessage(false);

  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    if (error) {
      setErrorMessage(true);
    }
    return Promise.reject({
      ...error,
    });
  }
};
