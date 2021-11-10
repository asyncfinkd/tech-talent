import Actions from "actions/index/pages";
import "styles/globals.css";
import type { AppProps } from "next/app";
import "styles/index.css";
import React from "react";
import { TokenProps } from "types/app/token";
import { PageComponent } from "types/app/page";
import "nprogress/nprogress.css";

if (!Actions.isServer) {
  Actions.init_i18n();
}

Actions.Router.events.on("routeChangeStart", () => Actions.NProgress.start());
Actions.Router.events.on("routeChangeComplete", () => Actions.NProgress.done());
Actions.Router.events.on("routeChangeError", () => Actions.NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  Actions.NProgress.settings.showSpinner = false;

  const [access_token, setAccess_Token] = Actions.useState<TokenProps>(
    Actions.APP__TOKEN__MOCKS__()
  );
  const [managerInfo, setManagerInfo] = Actions.useState({
    email: "",
    password: "",
  });
  const [managerEmail, setManagerEmail] = Actions.useState("");
  const [managerPassword, setManagerPassword] = Actions.useState("");
  const cookie: string | null | undefined = Actions.readCookie("cookie");

  Actions.useEffect(() => {
    if (cookie) {
      let decoded: TokenProps = Actions.jwt_decode(cookie);
      setAccess_Token(decoded);
      console.log(decoded);
    }
  }, [cookie]);

  if (
    Actions.isServer &&
    !Component.getInitialProps &&
    (Component as PageComponent<unknown>).ws
  ) {
    return null;
  }
  return (
    <>
      <Actions.Head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://tt.ge/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://tt.ge/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://tt.ge/favicon-96x96.png"
        />
        <link
          href="https://s3.eu-central-1.amazonaws.com/public.tt.ge/fonts/font.css"
          rel="stylesheet"
          type="text/css"
        />
        <title>Tech Talent</title>
      </Actions.Head>
      <Actions.QueryClientProvider client={Actions.client}>
        <Actions.ApplicationContext.Provider
          value={{
            access_token,
            setAccess_Token,
            managerInfo,
            setManagerInfo,
          }}
        >
          <div className="root-0-2-1">
            <Component {...pageProps} />
          </div>
          <Actions.ReactQueryDevtools initialIsOpen={false} />
        </Actions.ApplicationContext.Provider>
      </Actions.QueryClientProvider>
    </>
  );
}

export default MyApp;
