import { SuccessMessage } from "components/success-message";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import ProfileInformationForm from "./components/profile-information-form";
import ProfileInformationSidebar from "./components/profile-information-sidebar";

function ProfileInformation({ access_token, logged, setAccess_Token }: any) {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(false);
      }, 7000);
    }
  }, [successMessage]);
  return (
    <>
      <SuccessMessage
        variable={successMessage}
        setVariable={setSuccessMessage}
      />
      <Head>
        <title>Information | User | Tech Talent</title>
      </Head>
      <Header logged={logged} access_token={access_token} ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102 root-0-2-100">
          <ProfileInformationSidebar access_token={access_token} />
          <ProfileInformationForm
            access_token={access_token}
            setAccess_Token={setAccess_Token}
            setSuccessMessage={setSuccessMessage}
          />
        </div>
      </main>
      <Footer wantSponsors={true} logged={logged} access_token={access_token} />
    </>
  );
}

export default ProfileInformation;
