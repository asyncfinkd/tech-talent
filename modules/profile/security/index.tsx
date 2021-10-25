import { SuccessMessage } from "components/success-message";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import ProfileSecurityForm from "./components/profile-security-form";
import ProfileSecuritySidebar from "./components/profile-security-sidebar";

export default function SecurityPages({ access_token, logged }: any) {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  return (
    <>
      <SuccessMessage
        variable={successMessage}
        setVariable={setSuccessMessage}
      />
      <Head>
        <title>Security | User | Tech Talent</title>
      </Head>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102 root-0-2-100">
          <ProfileSecuritySidebar />
          <ProfileSecurityForm
            access_token={access_token}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </main>
      <Footer logged={logged} access_token={access_token} wantSponsors={true} />
    </>
  );
}
