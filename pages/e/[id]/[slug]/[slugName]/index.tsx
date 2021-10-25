import React from "react";
import env from "application/environment/env.json";

function EduFeed({ data }: any) {
  return (
    <>
      {console.log(data)}
      <p>Hello</p>
    </>
  );
}

export async function getServerSideProps(context: any) {
  let { slugName } = context.query;
  const requestData = await fetch(`${env.host}/api/get/edu/feed`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ slugName: slugName }),
  });
  const responseData = await requestData.json();

  return { props: { data: responseData } };
}

export default EduFeed;
