import Edu from "modules/edu";
import env from "application/environment/env.json";
import { EduResultProps } from "types/edu";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import jwt_decode from "jwt-decode";
import { useState } from "react";

function EduPage({
  data,
  logged,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [userLogged, setUserLogged] = useState<any>(logged);
  const [access_token, setAccess_Token] = useState<any>(token);

  return (
    <>
      <Edu access_token={access_token} logged={userLogged} fullData={data} />
    </>
  );
}

export default EduPage;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const request = await fetch(`${env.host}/api/get/edu`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const data: EduResultProps = await request.json();

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

  return { props: { data, logged, token } };
};
