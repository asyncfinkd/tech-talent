import Footer from "ui/footer";
import Header from "ui/header";
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
