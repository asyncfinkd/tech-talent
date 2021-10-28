import React from "react";
import Footer from "ui/footer";
import Header from "ui/header";

export default function ForgotThanksModules({ access_token, logged }: any) {
  return (
    <>
      <Header ShowShadow={true} access_token={access_token} logged={logged} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-111">
          <div className="root-0-2-279" style={{ margin: "2rem 0px" }}>
            <img
              src="https://tt.ge/images/empty-jobs.png"
              alt="Password reset process is completed"
              className="image-0-2-280"
            />
            <h1 className="h1-0-2-281">Password reset process is completed</h1>
            <div className="caption-0-2-282">
              Check your email and open the password reset link
            </div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}
