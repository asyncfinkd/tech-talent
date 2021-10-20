import Footer from "modules/footer";
import Header from "modules/header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header ShowShadow={true} />
      <Footer wantSponsors={true} />
    </>
  );
};

export default Home;
