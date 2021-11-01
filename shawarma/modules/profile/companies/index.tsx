import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "ui/footer";
import Header from "ui/header";
import ProfileCompaniesMap from "./components/profile-companies-map";
import ProfileCompaniesSidebar from "./components/profile-companies-sidebar";

export default function ProfileCompaniesModule({
  access_token,
  logged,
  data,
  companiesData,
  _id,
}: any) {
  return (
    <>
      <Head>
        <title>followed | User | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} access_token={access_token} logged={logged} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102 root-0-2-100">
          <ProfileCompaniesSidebar access_token={access_token} />
          <div className="body-0-2-101">
            <div>
              {/* {spinner ? (
                <>
                  <div className="loading-0-2-1">
                    <svg
                      className="stroke-0-2-37 spinner-0-2-2"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="xMidYMid"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        fill="none"
                        strokeWidth="10"
                        r="35"
                        strokeDasharray="164.93361431346415 56.97787143782138"
                      >
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          repeatCount="indefinite"
                          dur="1s"
                          values="0 50 50;360 50 50"
                          keyTimes="0;1"
                        ></animateTransform>
                      </circle>
                    </svg>
                    <span>Loading</span>
                  </div>
                </>
              ) : (
                <> */}
              {companiesData.length == 0 ? (
                <div className="root-0-2-416" style={{ margin: "2rem 0px" }}>
                  <img
                    src="https://tt.ge/images/empty-jobs.png"
                    alt={"You don’t have followed any company yet"}
                    className="image-0-2-417"
                  />
                  <h1 className="h1-0-2-418">
                    You don’t have followed any company yet
                  </h1>
                  <div className="caption-0-2-419">
                    If you want to follow company, go to companies page
                  </div>
                  <Link href="/companies">
                    <a className="root-0-2-46 button-0-2-420 animation-0-2-47 weightMedium-0-2-61 sizeLg-0-2-53 variantPrimary-0-2-54">
                      Search companies
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="root-0-2-215">
                  <div className="root-0-2-216">
                    {companiesData.map((item: any) => {
                      return (
                        <>
                          <ProfileCompaniesMap item={item} _id={_id} />
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* </> */}
              {/* )} */}
            </div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}
