import { readCookie } from "lib/readCookie";
import { useRouter } from "next/router";

// @ts-ignore
const nonAuth = (WrappedComponent: any) => {
  return (props: any) => {
    if (typeof window !== "undefined") {
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
