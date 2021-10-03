import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import FormLogin from "../../components/Login/Form/FormLogin";

const LoginPages: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Welcome | Tech Talent</title>
      </Helmet>
      <FormLogin />
      <Footer />
    </>
  );
};

export default LoginPages;
