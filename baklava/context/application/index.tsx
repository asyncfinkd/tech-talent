import React from "react";
import { TokenProps } from "../../types/app/token";

interface Props {
  access_token?: TokenProps | any;
  setAccess_Token?: React.Dispatch<React.SetStateAction<TokenProps>> | any;
}

export const ApplicationContext = React.createContext<Props>({
  access_token: {
    email: "",
    exp: 0,
    iat: 0,
    _id: "",
    fullName: "",
    logged: false,
    role: "",
  },
  setAccess_Token: "",
});
