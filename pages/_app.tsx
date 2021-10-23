import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import { ApplicationContext } from "context/application/ApplicationContext";
import { readCookie } from "lib/readCookie";
import jwt_decode from "jwt-decode";
import { TokenProps } from "types/app/token";
import { useRouter } from "next/router";
import { LoggedAPI } from "api";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [access_token, setAccess_Token] = useState<TokenProps>({
    email: "",
    exp: 0,
    iat: 0,
    _id: "",
    role: "",
    logged: false,
    phone: "",
    socialNetwork: "",
  });
  const cookie: string | null | undefined = readCookie("cookie");

  useEffect(() => {
    if (cookie) {
      let decoded: TokenProps = jwt_decode(cookie);
      setAccess_Token(decoded);
      console.log(decoded);
    }
  }, [cookie]);

  useEffect(() => {
    if (cookie) {
      LoggedAPI(setAccess_Token, router);
    }
  }, [cookie, router.pathname]);
  return (
    <>
      <Head>
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
      </Head>
      <QueryClientProvider client={client}>
        <ApplicationContext.Provider value={{ access_token, setAccess_Token }}>
          <div className="root-0-2-1">
            <Component {...pageProps} />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </ApplicationContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
