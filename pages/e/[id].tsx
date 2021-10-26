import React, { useState } from "react";
import Epage from "modules/e";
import env from "application/environment/env.json";
import { EduResultProps } from "types/edu";
import { CoursesResultProps } from "types/e";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import jwt_decode from "jwt-decode";

function EPage({
  fullData,
  resCoursesJSON,
  collapse,
  logged,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [dataCollapse, setDataCollapse] = useState<boolean>(collapse);
  const [userLogged, setUserLogged] = useState<boolean>(logged);
  const [access_token, setAccess_Token] = useState<any>(token);
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
  const result = await fetch(`${env.host}/api/get/edu/${context.query.id}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const fullData: EduResultProps[] = await result.json();

  const resCourses = await fetch(`${env.host}/api/get/edu/posts`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: fullData[0]._id }),
  });

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
  let token: any = {};
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

  return { props: { fullData, resCoursesJSON, collapse, logged, token } };
};

export default EPage;
