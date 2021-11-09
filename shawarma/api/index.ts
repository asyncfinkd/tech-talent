import axios from "axios";
import { readCookie } from "lib/readCookie";

export const LoggedAPI = (setAccess_Token: any, router: any) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/check/logged`,
      {},
      {
        headers: {
          Authorization: `Bearer ${readCookie("cookie")}`,
        },
      }
    )
    .then((result: any) => {
      if (result.data.success !== true) {
        router.push("/");
        setAccess_Token({
          email: "",
          exp: 0,
          iat: 0,
          _id: "",
          role: "",
          logged: false,
        });
      }
    });
};

export const request = async <T extends { message: string; success: boolean }>(
  api: string,
  method: "GET" | "POST" | "DELETE",
  contentType: "FORM" | "JSON",
  body?: Record<string | number, any> | BodyInit | null,
  setError?: boolean | any // change any of type next time...
  // serverSideToken?: string
) => {
  const reqObject = {
    method,
    headers: {
      "Content-type": `application/${contentType == "JSON" && "json"}`,
    },
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${api}`,
    reqObject
  );

  if (response.ok) {
    setError(false);
  }

  if (response.ok) {
    return (await response.json()) as T;
  } else {
    const error = (await response.json()) as T;
    if (error) {
      setError(true);
    }
    return Promise.reject({
      ...error,
    }) as unknown as T;
  }
};
