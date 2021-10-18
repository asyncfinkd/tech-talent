import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Header from "components/Header/Header";

const ErrorPages: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{`${t("PAGENOTFOUND__TITLE")}`}</title>
      </Helmet>
      <Header ShowShadow={true} />
      <main className="main-0-2-103">
        <div className="marginOnMobile-0-2-201">
          <div className="root-0-2-203" style={{ margin: "2rem 0px" }}>
            <img
              src="https://tt.ge/images/not-found.png"
              alt={t("PAGENOTFOUND")}
              className="image-0-2-204"
            />
            <h1 className="h1-0-2-205">{t("PAGENOTFOUND")}</h1>
            <div className="caption-0-2-206">{t("PAGENOTFOUND__SUBTITLE")}</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ErrorPages;
