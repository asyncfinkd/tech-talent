import Edu from "modules/edu";
import { EduResultProps } from "types/edu";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { DecodedAccess_Token } from "types/global";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";

function EduPage({
  data,
  logged,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [userLogged, setUserLogged] = useState<boolean>(logged);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

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
  const request = await fetch(`${process.env.REACT_APP_API_URL}/api/get/edu`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const data: EduResultProps = await request.json();

  const { req, res } = ctx;
  const { cookies } = req;
  let logged: boolean = false;
  let token: DecodedAccess_Token = DecodedAccess_Token__MOCKS__();
  if (cookies.cookie) {
    const requestToCatchUser = await fetch(
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

    const response = await requestToCatchUser.json();
    logged = response.success;
  }

  return { props: { data, logged, token } };
};
