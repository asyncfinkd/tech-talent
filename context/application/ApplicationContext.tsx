import React from "react";
import { TokenProps } from "types/app/token";

interface Props {
  access_token?: TokenProps;
  logged?: boolean;
  setAccess_Token?: React.Dispatch<React.SetStateAction<TokenProps>> | any;
  setLogged?: React.Dispatch<React.SetStateAction<boolean>> | any;
}

export const ApplicationContext = React.createContext<Props>({
  access_token: {
    email: "",
    exp: 0,
    iat: 0,
    _id: "",
  },
  logged: false,
  setAccess_Token: "",
  setLogged: false,
});
