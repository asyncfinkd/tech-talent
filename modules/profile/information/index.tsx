import Head from "next/head";
import React, { useContext } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import ProfileInformationForm from "./components/profile-information-form";
import ProfileInformationSidebar from "./components/profile-information-sidebar";

function ProfileInformation({ access_token, logged, setAccess_Token }: any) {
  return (
    <>
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
          />
        </div>
      </main>
      <Footer wantSponsors={true} access_token={access_token} />
    </>
  );
}

export default ProfileInformation;
