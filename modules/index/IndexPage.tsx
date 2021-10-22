import Footer from "ui/footer";
import Header from "ui/header";
import type { NextPage } from "next";
import Notification from "ui/notification";

const Home: NextPage = () => {
  return (
    <>
      <Header ShowShadow={true} />
      <Notification />
      <Footer wantSponsors={true} />
    </>
  );
};

export default Home;
