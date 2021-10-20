import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";

const EduFeed: React.FC = () => {
  return (
    <>
      <Header ShowLine={true} />
      <p>Edu Feed</p>
      <Footer wantSponsors={true} />
    </>
  );
};

export default EduFeed;
