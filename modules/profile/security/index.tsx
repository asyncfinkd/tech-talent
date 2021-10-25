import Head from "next/head";
import React from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import ProfileSecurityForm from "./components/profile-security-form";
import ProfileSecuritySidebar from "./components/profile-security-sidebar";

export default function SecurityPages({ access_token, logged }: any) {
  return (
    <>
      <Head>
        <title>Security | User | Tech Talent</title>
      </Head>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102 root-0-2-100">
          <ProfileSecuritySidebar />
          <ProfileSecurityForm access_token={access_token} />
        </div>
      </main>
      <Footer logged={logged} access_token={access_token} wantSponsors={true} />
    </>
  );
}
