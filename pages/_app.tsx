import "styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
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
      <div className="root-0-2-1">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
