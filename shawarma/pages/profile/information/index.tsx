import React, { useState } from "react";
import ProfileInformation from "modules/profile/information";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useAuth } from "lib/use-auth";
import { DecodedAccess_Token } from "types/global";

function ProfileInfrmationPage({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

  return (
    <>
      <ProfileInformation
        setAccess_Token={setAccess_Token}
        access_token={access_token}
        logged={logged}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ ctx, wantAuthentication: true });
};

export default ProfileInfrmationPage;
