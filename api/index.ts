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
