import React from "react";
import Footer from "../../components/Footer/Footer";
import RegistrationCompanyNotification from "../../components/Notification/RegistrationCompany/RegistrationCompanyNotification";

const IndexPages: React.FC = () => {
  return (
    <>
      <RegistrationCompanyNotification />
      <Footer wantSponsors={true} />
    </>
  );
};

export default IndexPages;
