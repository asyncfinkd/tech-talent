import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/index.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ApplicationContext } from "context/application/ApplicationContext";
import React, { useEffect, useState } from "react";

const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [jwt, setJwt] = useState({});
  // useEffect(() => {

  // })
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
        <ApplicationContext.Provider value={{ jwt, setJwt }}>
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
