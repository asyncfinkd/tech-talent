import React, { useState } from "react";
import env from "application/environment/env.json";
import { GetServerSideProps } from "next";
import jwt_decode from "jwt-decode";
import EduFeedModule from "modules/e/[id]/[slug]/[slugName]";

function EduFeed({ responseData, log, token }: any) {
  const [data, setData] = useState<any>(responseData);
  const [logged, setLogged] = useState<boolean>(log);
  const [access_token, setAccess_Token] = useState<any>(token);

  return (
    <>
      {console.log(logged)}
      {console.log(access_token)}
      {console.log(data)}
      <EduFeedModule access_token={access_token} logged={logged} data={data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let { slugName } = context.query;
  const requestData = await fetch(`${env.host}/api/get/edu/feed`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ slugName: slugName }),
  });
  const responseData = await requestData.json();

  const { req, res } = context;
  const { cookies } = req;
  let logged: boolean = false;
  let token: any = {};
  if (cookies.cookie) {
    const request = await fetch(`${env.host}/api/check/logged`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${cookies.cookie}`,
      },
      body: JSON.stringify({}),
    });

    token = jwt_decode(cookies.cookie);

    const response = await request.json();
    logged = response.success;
  }

  return { props: { responseData, log: logged, token } };
};

export default EduFeed;
