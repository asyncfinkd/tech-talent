import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import env from "../../application/environment/env.json";

const EduDetailPages: React.FC = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    let splitURL = window.location.pathname.split("/");
    axios.get(`${env.host}/api/get/edu/${splitURL[2]}`).then((result: any) => {
      setData(result.data[0]);
    });
  });
  return (
    <>
      <Header ShowShadow={true} />
      <Footer wantSponsors={true} />
    </>
  );
};

export default EduDetailPages;
