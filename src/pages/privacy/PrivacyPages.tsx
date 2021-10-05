import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Footer from "../../components/Footer/Footer";

const PrivacyPages: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Tech Talent</title>
      </Helmet>
      <ComingSoon />
      <Footer wantSponsors={true} />
    </>
  );
};

export default PrivacyPages;
