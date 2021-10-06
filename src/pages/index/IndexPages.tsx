import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import RegistrationCompanyNotification from "../../components/Notification/RegistrationCompany/RegistrationCompanyNotification";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";

const IndexPages: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Tech Talent</title>
      </Helmet>
      <Header />
      <RegistrationCompanyNotification />
      <Footer wantSponsors={true} />
    </>
  );
};

export default IndexPages;
