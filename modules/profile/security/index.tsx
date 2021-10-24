import Head from "next/head";
import React, { useContext } from "react";
import Footer from "ui/footer";
import Header from "ui/header";
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
          <div className="body-0-2-101">
            <section className="root___0__2__183">
              <h2 className="h2-0-2-184">Security</h2>
              <form>
                <div className="inputGroup-0-2-185">
                  <div className="root-0-2-119">
                    <label className="label-0-2-120">
                      Email{" "}
                      <span
                        className="asteriskValid-0-2-121"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      className="input-0-2-123"
                      disabled={true}
                      value={access_token.email}
                    />
                  </div>
                  <div className="root-0-2-119">
                    <label className="label-0-2-120">
                      Current password{" "}
                      <span
                        className="asteriskValid-0-2-121"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input type="password" className={"input-0-2-251"} />
                  </div>
                  <div className="root-0-2-119">
                    <label className="label-0-2-120">
                      New password{" "}
                      <span
                        className="asteriskValid-0-2-121"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input type="password" className={`input-0-2-251`} />
                  </div>
                  <div className="root-0-2-119">
                    <label className="label-0-2-120">
                      Repeat password{" "}
                      <span
                        className="asteriskValid-0-2-121"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input type="password" className={`input-0-2-251`} />
                  </div>
                  {/* {mutation.isLoading ? (
                    <button
                      className="root-0-2-46 button-0-2-186 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                      type="submit"
                    >
                      <div className="loading-0-2-112">
                        <svg
                          className="stroke-0-2-35 spinner-0-2-113"
                          width="100"
                          height="100"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="xMidYMid"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            fill="none"
                            stroke-width="10"
                            r="35"
                            stroke-dasharray="164.93361431346415 56.97787143782138"
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
                        <span>{t("LOADING")}</span>
                      </div>
                    </button>
                  ) : ( */}
                  <button
                    className="root-0-2-46 button-0-2-186 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                    type="submit"
                  >
                    Save
                  </button>
                  {/* )} */}
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer access_token={access_token} wantSponsors={true} />
    </>
  );
}
