import { ApplicationContext } from "context/application/ApplicationContext";
import { deleteCookie } from "lib/deleteCookie";
import { useRouter } from "next/router";
import { useCallback, useContext } from "react";

export default function LogoutPage() {
  const router = useRouter();
  const { setAccess_Token } = useContext(ApplicationContext);

  const removeToken = useCallback(() => {
    setAccess_Token("");
    deleteCookie("cookie", "/", "localhost");
    router.push("/");
  }, []);

  return <>{removeToken()}</>;
}
