import React, { useState } from "react";
import Epage from "modules/e";
import { EduResultProps } from "types/edu";
import { CoursesResultProps } from "types/e";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import jwt_decode from "jwt-decode";
import { DecodedAccess_Token } from "types/global";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";

function EPage({
  fullData,
  resCoursesJSON,
  collapse,
  logged,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [dataCollapse, setDataCollapse] = useState<boolean>(collapse);
  const [userLogged, setUserLogged] = useState<boolean>(logged);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);
  return (
    <>
      <Epage
        fullData={fullData}
        collapse={dataCollapse}
        setCollapse={setDataCollapse}
        courses={resCoursesJSON}
        access_token={access_token}
        logged={userLogged}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const result = await fetch(
    `${process.env.REACT_APP_API_URL}/api/get/edu/${context.query.id}`,
    {
      method: "GET",
      headers: { "Content-type": "application/json" },
    }
  );
  const fullData: EduResultProps[] = await result.json();

  const resCourses = await fetch(
    `${process.env.REACT_APP_API_URL}/api/get/edu/posts`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: fullData[0]._id }),
    }
  );

  const resCoursesJSON: CoursesResultProps[] = await resCourses.json();

  let collapse: boolean = false;

  if (resCoursesJSON.length != 0) {
    collapse = false;
  } else {
    collapse = true;
  }

  const { req, res } = context;
  const { cookies } = req;
  let logged: boolean = false;
  let token: DecodedAccess_Token = DecodedAccess_Token__MOCKS__();
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

    token = jwt_decode(cookies.cookie);

    const response = await request.json();
    logged = response.success;
  }

  return { props: { fullData, resCoursesJSON, collapse, logged, token } };
};

export default EPage;
