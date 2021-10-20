import Footer from "modules/footer";
import Header from "modules/header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Footer wantSponsors={true} />
    </>
  );
};

export default Home;
