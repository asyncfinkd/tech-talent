import { readCookie } from "lib/readCookie";
import { useRouter } from "next/router";
import { isServer } from "lib/isServer";

// @ts-ignore
const nonAuth = (WrappedComponent: any) => {
  return (props: any) => {
    if (!isServer) {
      const Router = useRouter();
      const accessToken = readCookie("cookie");
      if (accessToken != null) {
        Router.replace("/");
        return null;
      } else {
        return <WrappedComponent {...props} />;
      }
    }
    return null;
  };
};

export default nonAuth;
