import axios from "axios";
import env from "application/environment/env.json";
import { readCookie } from "lib/readContext";

export const LoggedAPI = (setAccess_Token: any, router: any) => {
  axios
    .post(
      `${env.host}/api/check/logged`,
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
