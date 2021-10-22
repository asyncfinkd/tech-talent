import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React, { useEffect, useState } from "react";
import { ApplicationContext } from "context/application/ApplicationContext";
import { readCookie } from "lib/readContext";
import jwt_decode from "jwt-decode";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [access_token, setAccess_Token] = useState<string>("");
  const [logged, setLogged] = useState<boolean>(false);
  const cookie: string | null | undefined = readCookie("cookie");

  useEffect(() => {
    if (cookie) {
      let decoded: string = jwt_decode(cookie);
      setAccess_Token(decoded);
      console.log(decoded);
    }
  }, [cookie]);
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
        <ApplicationContext.Provider
          value={{ access_token, logged, setAccess_Token, setLogged }}
        >
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
