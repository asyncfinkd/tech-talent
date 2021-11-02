import Actions from "actions/index";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage<any> = ({ logged, access_token }: any) => {
  return (
    <>
      <Actions.Header
        access_token={access_token}
        logged={logged}
        ShowShadow={true}
      />
      <Actions.Notification />
      <Actions.Footer
        logged={logged}
        access_token={access_token}
        wantSponsors={true}
      />
    </>
  );
};

export default Home;
