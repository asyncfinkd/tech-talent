import Actions from "actions/about";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Actions.Header ShowShadow={true} />
      <Actions.ComingSoon pageTitle={"About | Tech Talent"} />
    </>
  );
};

export default About;
