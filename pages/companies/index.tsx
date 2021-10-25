import React, { useState } from "react";
import Header from "ui/header";
import env from "application/environment/env.json";
import jwt_decode from "jwt-decode";
import Head from "next/head";
import Footer from "ui/footer";

function Companies({ token, log }: any) {
  const [access_token, setAccess_Token] = useState<any>(token);
  const [logged, setLogged] = useState<boolean>(log);
  return (
    <>
      <Head>
        <title>Companies | Tech Talent</title>
      </Head>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />

      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const { req, res } = ctx;
  const { cookies } = req;
  let logged: boolean = false;
  let token: any = {};
  if (cookies.cookie) {
    const requestToCatchUser = await fetch(`${env.host}/api/check/logged`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${cookies.cookie}`,
      },
      body: JSON.stringify({}),
    });

    token = jwt_decode(cookies.cookie);

    const response = await requestToCatchUser.json();
    logged = response.success;
  }

  return { props: { log: logged, token } };
}

export default Companies;
