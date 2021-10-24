import React from "react";
import Epage from "modules/e";
import env from "application/environment/env.json";

function EPage({ fullData }: any) {
  return (
    <>
      <Epage fullData={fullData} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${env.host}/api/get/edu/${context.query.id}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const fullData = await res.json();
  return { props: { fullData } };
}

export default EPage;
