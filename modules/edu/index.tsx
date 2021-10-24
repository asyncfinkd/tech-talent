// import { NextPage } from "next";
import React from "react";
import Header from "ui/header";
import Footer from "ui/footer";
import EduMap from "./components/edu-map";
import EduHeader from "./components/edu-header";

export default function Edu({ data }: any) {
  return (
    <>
      {console.log(data)}
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-233">
          <EduHeader data={data} />
          <div className="marginOnMobile-0-2-134">
            <div className="grid-0-2-234">
              {data.map((item: any) => {
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
}
