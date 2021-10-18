import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const AboutPages: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>About | Tech Talent</title>
      </Helmet>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-102">
          <div className="root-0-2-163" style={{ margin: "2rem 0px" }}>
            <img
              src="https://tt.ge/images/empty-jobs.png"
              alt="Coming Soon"
              className="image-0-2-164"
            />
            <h1 className="h1-0-2-165">Contact Us</h1>
            <div className="caption-0-2-166">info@tt.ge</div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} />
    </>
  );
};

export default AboutPages;
