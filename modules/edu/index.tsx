// import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "ui/header";
import Footer from "ui/footer";
import EduMap from "./components/edu-map";
import EduHeader from "./components/edu-header";
import Head from "next/head";
import { EduResultProps } from "types/edu";

const Edu: React.FC<any> = ({ fullData }) => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<EduResultProps[]>(fullData);
  const [result, setResult] = useState<EduResultProps[]>(fullData);

  const identificationSearch = () => {
    if (search.length == 0) {
      setData(result);
    } else {
      setData(
        result?.filter((val: any) => {
          if (search == "") {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
      );
    }
  };

  useEffect(() => {
    identificationSearch();
  }, [search]);
  return (
    <>
      <Head>
        <title>Education | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-233">
          <EduHeader data={data} search={search} setSearch={setSearch} />
          <div className="marginOnMobile-0-2-134">
            <div className="grid-0-2-234">
              {data?.map((item: any) => {
                return (
                  <>
                    <EduMap item={item} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer wantSponsors={true} />
    </>
  );
};

export default Edu;
