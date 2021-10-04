import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";

const ForgotThanksPages: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t("FORGOTTHANKSPAGESTITLE")}</title>
      </Helmet>
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-111">
          <div className="root-0-2-279" style={{ margin: "2rem 0px" }}>
            <img
              src="https://tt.ge/images/empty-jobs.png"
              alt="Password reset process is completed"
              className="image-0-2-280"
            />
            <h1 className="h1-0-2-281">{t("PASSWORDRESETISCOMPLETED")}</h1>
            <div className="caption-0-2-282">{t("CHECKYOUREMAIL")}</div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} />
    </>
  );
};

export default ForgotThanksPages;
