import Footer from "ui/footer";
import Header from "ui/header";
import type { NextPage } from "next";
import Notification from "ui/notification";
import React from "react";

const Home: NextPage<any> = ({ logged, access_token }: any) => {
  return (
    <>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />
      <Notification />
      <Footer logged={logged} access_token={access_token} wantSponsors={true} />
    </>
  );
};

export default Home;
