import ProfileJobs from "modules/profile/jobs";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useAuth } from "lib/use-auth";

function ProfileJobsPages({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<any>(data);
  const [access_token, setAccess_Token] = useState<any>(token);

  return (
    <>
      <ProfileJobs
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

export default ProfileJobsPages;
