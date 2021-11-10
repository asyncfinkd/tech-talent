import { ApplicationContext } from "context/application/ApplicationContext";
import { deleteCookie } from "lib/delete-cookie";
import { useRouter } from "next/router";
import React, { useCallback, useContext } from "react";

export default function Logout() {
  const router = useRouter();
  const { setAccess_Token } = useContext(ApplicationContext);

  const removeToken = useCallback(() => {
    setAccess_Token("");
    deleteCookie("cookie", "/", "localhost");
    router.push("/");
  }, []);

  return <>{removeToken()}</>;
}
