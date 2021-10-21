import ComingSoon from "ui/comingsoon";
import Header from "ui/header";
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
