import React from "react";
import Footer from "ui/footer";
import Header from "ui/header";

export default function ProfileCompaniesModule({ access_token, logged }: any) {
  return (
    <>
      <Header ShowShadow={true} access_token={access_token} logged={logged} />

      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}
