import { useAuth } from "lib/useAuth";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import React, { useState } from "react";
import { DecodedAccess_Token } from "types/global";
import ProfileCompaniesModule from "modules/profile/companies";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";
import jwt_decode from "jwt-decode";

function ProfileCompaniesPage({
  data,
  token,
  followedCompanies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);
  const [profileData, setProfileData] = useState<any>([]);

  return (
    <>
      {console.log(followedCompanies)}
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
  const { req, res } = ctx;
  const { cookies } = req;
  let logged: boolean = false;
  let token: DecodedAccess_Token = DecodedAccess_Token__MOCKS__();
  let followedResponse;
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

    const followedRequest = await fetch(
      `${process.env.REACT_APP_API_URL}/api/get/followed/companies`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${cookies.cookie}`,
        },
      }
    );
    console.log(followedResponse);
    followedResponse = followedRequest.json();

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

  return {
    props: { data: logged, token, followedCompanies: followedResponse },
  };
};

export default ProfileCompaniesPage;
