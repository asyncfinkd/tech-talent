import ModuleCompanyDetailPage from "modules/c/[id]";
import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import env from "application/environment/env.json";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { DecodedAccess_Token } from "types/global";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";
import { GetCompaniesWithIDProps } from "types/c";

function CompanyDetailPage({
  data,
  token,
  log,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<any>(log);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);
  const [companiesData, setCompaniesData] = useState<GetCompaniesWithIDProps>(
    data[0]
  );

  return (
    <>
      <ModuleCompanyDetailPage
        access_token={access_token}
        logged={logged}
        data={companiesData}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const getCompaniesWithId = await fetch(
    `${env.host}/api/get/companies/${ctx.query.id}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  const catchCompaniesWithId: GetCompaniesWithIDProps =
    await getCompaniesWithId.json();

  const { req } = ctx;
  const { cookies } = req;
  let logged: boolean = false;
  let token: DecodedAccess_Token = DecodedAccess_Token__MOCKS__();
  if (cookies.cookie) {
    const request = await fetch(`${env.host}/api/check/logged`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${cookies.cookie}`,
      },
      body: JSON.stringify({}),
    });

    token = jwt_decode(cookies.cookie);

    const response = await request.json();
    logged = response.success;
  }

  return {
    props: { data: catchCompaniesWithId, token, log: logged },
  };
};

export default CompanyDetailPage;
