import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import CompaniesPage from "modules/companies";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";

function Companies({
  token,
  log,
  baseData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [access_token, setAccess_Token] = useState<any>(token);
  const [logged, setLogged] = useState<boolean>(log);
  const [data, setData] = useState<any>(baseData);

  return (
    <>
      {console.log(access_token)}
      <CompaniesPage
        access_token={access_token}
        logged={logged}
        data={data}
        setData={setData}
        _id={access_token._id}
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
  let token: any = {};
  if (cookies.cookie) {
    const requestToCatchUser = await fetch(
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

    const response = await requestToCatchUser.json();
    logged = response.success;
  }

  const requestToData = await fetch(
    `${process.env.REACT_APP_API_URL}/api/get/companies`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const responseData = await requestToData.json();

  return { props: { log: logged, token, baseData: responseData } };
};

export default Companies;
