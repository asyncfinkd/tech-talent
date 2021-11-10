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
import { useAuth } from "lib/use-auth";

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
  return useAuth({ ctx });
};

export default ForgotPages;
