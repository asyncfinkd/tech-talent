import { Result } from "types/features/forgot";
import env from "application/environment/env.json";

export const ForgotRequest = async (loginData: {
  email: string;
}): Promise<Result> => {
  const { email } = loginData;
  const response = await fetch(`${env.host}/api/forgot`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email }),
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
