import React from "react";

interface Props {
  access_token?: string;
  logged?: boolean;
  setAccess_Token?: React.Dispatch<React.SetStateAction<string>> | any;
  setLogged?: React.Dispatch<React.SetStateAction<boolean>> | any;
}

export const ApplicationContext = React.createContext<Props>({
  access_token: "",
  logged: false,
  setAccess_Token: "",
  setLogged: false,
});
