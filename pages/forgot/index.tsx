import React, { useState } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import jwt_decode from "jwt-decode";
import ForgotModules from "modules/forgot";
import { DecodedAccess_Token } from "types/global";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";

function ForgotPages({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

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
  let token: DecodedAccess_Token = DecodedAccess_Token__MOCKS__();
  if (cookies.cookie) {
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}/api/check/logged`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${cookies.cookie}`,
        },
        body: JSON.stringify({}),
      }
    );

    token = jwt_decode(cookies.cookie);

    const response = await request.json();
    logged = response.success;
  }

  return { props: { data: logged, token } };
};

export default ForgotPages;
