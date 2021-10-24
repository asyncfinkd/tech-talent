import Head from "next/head";
import React from "react";
import Header from "ui/header";
import ProfileJobsSidebar from "./components/profile-jobs-sidebar";

export default function ProfileJobs() {
  return (
    <>
      <Head>
        <title>Jobs | User | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102 root-0-2-100">
          <ProfileJobsSidebar />
          <div className="body-0-2-101">
            <div className="root__12312i3oi123o">
              <img
                src="https://tt.ge/images/empty-education.png"
                alt="Jobs For Me"
                className="image-0-2-116"
              />
              <h1 className="h1-0-2-117">Jobs For Me</h1>
              <div className="caption-0-2-118">Coming Soon</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}