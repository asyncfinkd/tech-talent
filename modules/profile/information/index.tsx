import { ApplicationContext } from "context/application/ApplicationContext";
import Head from "next/head";
import React, { useContext } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import ProfileInformationForm from "./components/profile-information-form";
import ProfileInformationSidebar from "./components/profile-information-sidebar";

function ProfileInformation() {
  const { access_token } = useContext(ApplicationContext);
  return (
    <>
      <Head>
        <title>Information | User | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102 root-0-2-100">
          <ProfileInformationSidebar access_token={access_token} />
          <ProfileInformationForm />
        </div>
      </main>
      <Footer wantSponsors={true} />
    </>
  );
}

export default ProfileInformation;
