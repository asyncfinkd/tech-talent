import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import FormLogin from "../../components/Login/Form/FormLogin";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";

const LoginPages: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (localStorage.getItem("local")) {
      history.push("/");
    }
  });
  return (
    <>
      <Helmet>
        <title>{t("LOGINPAGESTITLE")}</title>
      </Helmet>
      <Header ShowShadow={true} />
      <FormLogin />
      <Footer />
    </>
  );
};

export default LoginPages;
