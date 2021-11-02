import Actions from "actions/terms";
import React from "react";

const Terms: React.FC = () => {
  return (
    <>
      <Actions.Header ShowShadow={true} />
      <Actions.ComingSoon pageTitle={"Terms & Conditions | Tech Talent"} />
    </>
  );
};

export default Terms;
