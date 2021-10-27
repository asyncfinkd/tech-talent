import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React, { useState } from "react";
import Header from "ui/header";
import env from "application/environment/env.json";
import jwt_decode from "jwt-decode";
import { DecodedAccess_Token } from "types/global";
import Footer from "ui/footer";

const Courses: NextPage = ({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

  return (
    <>
      <Header ShowShadow={true} access_token={access_token} logged={logged} />

      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
};

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

export default Courses;
