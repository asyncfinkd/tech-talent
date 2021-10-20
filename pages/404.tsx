import Header from "modules/header";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import type { NextPage } from "next";

const ErrorPage: NextPage = () => {
  const imageLoader = () => {
    return `https://tt.ge/images/not-found.png`;
  };
  return (
    <>
      <Head>
        <title>Page not found | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-103">
        <div className="marginOnMobile-0-2-201">
          <div className="root-0-2-203" style={{ margin: "2rem 0px" }}>
            <Image
              loader={imageLoader}
              src="https://tt.ge/images/not-found.png"
              width="200px"
              height="200px"
              alt="Page not found"
              className="image-0-2-204"
            />
            <h1 className="h1-0-2-205">Page not found</h1>
            <div className="caption-0-2-206">
              Are you sure this is what you are looking for?
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
