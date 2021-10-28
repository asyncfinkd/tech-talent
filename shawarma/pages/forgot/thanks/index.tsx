import React, { useState } from "react";
import ForgotThanksModules from "modules/forgot/thanks";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useAuth } from "lib/useAuth";

export default function ForgotThanksPages({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<any>(data);
  const [access_token, setAccess_Token] = useState<any>(token);

  return (
    <>
      <ForgotThanksModules access_token={access_token} logged={logged} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ ctx });
};
