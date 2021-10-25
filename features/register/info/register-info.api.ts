import env from "application/environment/env.json";
import { readCookie } from "lib/readCookie";
import { Result } from "types/features/register";

export const RegisterInfoRequest = async (loginData: {
  fullName: string;
  phone: string;
  socialNetwork: string;
}): Promise<Result> => {
  const { fullName, phone, socialNetwork } = loginData;
  const response = await fetch(`${env.host}/api/register/second/step`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${readCookie("cookie")}`,
    },
    body: JSON.stringify({ fullName, phone, socialNetwork }),
  });

  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    if (error) {
      alert("SYS ERROR");
    }

    return Promise.reject({
      ...error,
    });
  }
};
