import { useAuth } from "lib/useAuth";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import React, { useState } from "react";
import { DecodedAccess_Token } from "types/global";
import Footer from "ui/footer";
import Header from "ui/header";

function ProfileResumePage({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

  return (
    <>
      <Header ShowShadow={true} access_token={access_token} logged={logged} />

      <Footer wantSponsors={true} access_token={access_token} logged={logged} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ ctx, wantAuthentication: true });
};

export default ProfileResumePage;
