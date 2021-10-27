import React, { useState } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import env from "application/environment/env.json";
import jwt_decode from "jwt-decode";
import ForgotModules from "modules/forgot";

function ForgotPages({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<any>(data);
  const [access_token, setAccess_Token] = useState<any>(token);

  return (
    <>
      <ForgotModules access_token={access_token} logged={logged} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { req, res } = ctx;
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

  return { props: { data: logged, token } };
};

export default ForgotPages;
