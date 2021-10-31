import { readCookie } from "lib/readCookie";
import { Result } from "types/features/follow";

export const FollowRequest = async (loginData: {
  id: string;
}): Promise<Result> => {
  const { id } = loginData;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/follow/companies`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${readCookie("cookie")}`,
      },
      body: JSON.stringify({ id }),
    }
  );
  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    if (error) {
      alert("Error");
    }

    return Promise.reject({
      ...error,
    });
  }
};
