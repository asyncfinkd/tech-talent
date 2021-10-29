import { useAuth } from "lib/useAuth";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import React, { useState } from "react";
import { DecodedAccess_Token } from "types/global";
import ProfileCompaniesModule from "modules/profile/companies";

function ProfileCompaniesPage({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);
  const [profileData, setProfileData] = useState<any>([]);

  return (
    <>
      <ProfileCompaniesModule
        access_token={access_token}
        logged={logged}
        data={profileData}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ ctx, wantAuthentication: true });
};

export default ProfileCompaniesPage;
