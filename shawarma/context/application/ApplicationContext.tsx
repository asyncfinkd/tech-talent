import React from "react";
import { TokenProps } from "types/app/token";

interface Props {
  access_token?: TokenProps;
  setAccess_Token?: React.Dispatch<React.SetStateAction<TokenProps>> | any;
  managerInfo: {
    fullName: string;
    email: string;
    password: string;
    repeatPassword: string;
  };
  setManagerInfo?: any;
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
  managerInfo: {
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  },
});
