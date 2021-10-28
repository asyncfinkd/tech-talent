import TextContainer from "components/text-container";
import React from "react";

const RegisterHeader: React.FC = () => {
  return (
    <>
      <TextContainer element="h1" className="h1-0-2-114">
        Register
      </TextContainer>
      <TextContainer element="div" className="caption-0-2-115">
        Enter Your Credentials
      </TextContainer>
    </>
  );
};

export default RegisterHeader;
