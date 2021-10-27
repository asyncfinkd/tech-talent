import IndexPage from "modules/index/IndexPage";
import { Suspense, useState, lazy } from "react";
import jwt_decode from "jwt-decode";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { DecodedAccess_Token } from "types/global";

function Index({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

  return (
    <>
      <IndexPage access_token={access_token} logged={logged} />;
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

export default Index;
