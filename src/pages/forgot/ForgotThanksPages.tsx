import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

const ForgotThanksPages: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>{t("FORGOTTHANKSPAGESTITLE")}</title>
      </Helmet>
      <Header ShowShadow={true} />
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
