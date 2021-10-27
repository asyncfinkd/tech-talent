import SecurityPages from "../../../modules/profile/security";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { DecodedAccess_Token } from "types/global";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";

function SecurityPage({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

  return (
    <>
      <SecurityPages access_token={access_token} logged={logged} />
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
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return { props: { data: logged, token } };
};

export default SecurityPage;
