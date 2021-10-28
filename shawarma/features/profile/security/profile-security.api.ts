import { readCookie } from "lib/readCookie";
import { Result } from "types/features/profile/security";

export const ProfileSecurityRequest = async (
  loginData: { currentPassword: string; newPassword: string },
  setCurrentPasswordError: any
): Promise<Result> => {
  const { currentPassword, newPassword } = loginData;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/update/profile/security`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${readCookie("cookie")}`,
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    }
  );
  if (response.ok) setCurrentPasswordError(false);

  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    if (error) {
      setCurrentPasswordError(true);
    }

    return Promise.reject({
      ...error,
    });
  }
};
