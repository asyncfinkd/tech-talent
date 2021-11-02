import Actions from "actions/privacy";
import React from "react";

const Privacy: React.FC = () => {
  return (
    <>
      <Actions.Header ShowShadow={true} />
      <Actions.ComingSoon pageTitle={"Terms & Conditions | Tech Talent"} />
    </>
  );
};

export default Privacy;
