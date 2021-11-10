import { readCookie } from "lib/read-cookie";
import { useRouter } from "next/router";
import { isServer } from "lib/is-server";

// @ts-ignore
const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    if (!isServer) {
      const Router = useRouter();
      const accessToken = readCookie("cookie");

      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default withAuth;
