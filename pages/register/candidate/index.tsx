import RegisterFooter from "modules/footer/register";
import Header from "modules/header";
import { NextPage } from "next";
import React from "react";

const CandidatePage: NextPage = () => {
  return (
    <>
      <Header ShowShadow={true} />
      <RegisterFooter candidate={true} />
    </>
  );
};

export default CandidatePage;
