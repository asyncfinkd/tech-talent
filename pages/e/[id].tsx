import React, { useState } from "react";
import Epage from "modules/e";
import env from "application/environment/env.json";
import { EduResultProps } from "types/edu";
import { CoursesResultProps } from "types/e";
import { InferGetServerSidePropsType } from "next";

function EPage({
  fullData,
  resCoursesJSON,
  collapse,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [dataCollapse, setDataCollapse] = useState<boolean>(collapse);
  return (
    <>
      <Epage
        fullData={fullData}
        collapse={dataCollapse}
        setCollapse={setDataCollapse}
        courses={resCoursesJSON}
      />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${env.host}/api/get/edu/${context.query.id}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const fullData: EduResultProps[] = await res.json();

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

  return { props: { fullData, resCoursesJSON, collapse } };
}

export default EPage;
