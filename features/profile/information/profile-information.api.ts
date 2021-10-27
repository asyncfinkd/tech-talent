import { readCookie } from "lib/readCookie";
import { Result } from "types/features/register";

export const ProfileInformationRequest = async (loginData: {
  fullName: string;
  phone: string;
  socialNetwork: string;
}): Promise<Result> => {
  const { fullName, phone, socialNetwork } = loginData;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/update/profile/information`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${readCookie("cookie")}`,
      },
      body: JSON.stringify({ fullName, phone, socialNetwork }),
    }
  );
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
