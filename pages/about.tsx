import ComingSoon from "modules/comingsoon";
import Header from "modules/header";
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <Header ShowShadow={true} />
      <ComingSoon pageTitle={"About | Tech Talent"} />
    </>
  );
};

export default About;
