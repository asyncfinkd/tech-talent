import IndexPage from "modules/index/IndexPage";
import { useState } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { DecodedAccess_Token } from "types/global";
import { useAuth } from "lib/use-auth";

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
  return useAuth({ ctx });
};

export default Index;
