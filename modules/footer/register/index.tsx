import { Button } from "components/button";
import TextContainer from "components/text-container";
import React from "react";
import { FooterProps } from "types/modules/footer";

const RegisterFooter: React.FC<FooterProps> = ({ candidate, index }) => {
  const Candidate = () => {
    return (
      <>
        <div className="placeholder-0-2-102"></div>
        <div className="footer-0-2-103">
          <div className="line-0-2-104">
            <div className="progress-0-2-105" style={{ width: "40%" }}></div>
          </div>
          <div className="marginOnMobile-0-2-111">
            <div className="left-0-2-106">
              <div className="textGroup-0-2-107">
                <TextContainer className="h1-0-2-108" element="div">
                  Create Your Account
                </TextContainer>
                <TextContainer className="caption-0-2-109" element="div">
                  Enter Your Credentials
                </TextContainer>
              </div>
              <Button
                className="root-0-2-46 nextButton-0-2-110 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                type="submit"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Index = () => {
    return (
      <>
        <div className="placeholder-0-2-235"></div>
        <div className="footer-0-2-236">
          <div className="line-0-2-237">
            <div className="progress-0-2-238" style={{ width: "20%" }}></div>
          </div>
          <div className="marginOnMobile-0-2-134">
            <div className="left-0-2-239">
              <div className="textGroup-0-2-240">
                <TextContainer className="h1-0-2-241" element="div">
                  Tell us who you are
                </TextContainer>
                <TextContainer className="caption-0-2-242" element="div">
                  Select profession
                </TextContainer>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      {candidate && <Candidate />}
      {index && <Index />}
    </>
  );
};

export default RegisterFooter;
