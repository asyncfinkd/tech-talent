import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const TermsAndConditions: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Tech Talent</title>
      </Helmet>
      <Header ShowShadow={true} />
      <ComingSoon />
      <Footer wantSponsors={true} />
    </>
  );
};

export default TermsAndConditions;
