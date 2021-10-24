import React, { useState } from "react";
import Epage from "modules/e";
import env from "application/environment/env.json";

function EPage({ fullData, resCoursesJSON, collapse }: any) {
  const [dataCollapse, setDataCollapse] = useState<boolean>(collapse);
  return (
    <>
      {console.log(resCoursesJSON)}
      {console.log(collapse)}
      <Epage
        fullData={fullData}
        collapse={dataCollapse}
        setCollapse={setDataCollapse}
      />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const res = await fetch(`${env.host}/api/get/edu/${context.query.id}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const fullData = await res.json();

  const resCourses = await fetch(`${env.host}/api/get/edu/posts`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: fullData[0]._id }),
  });

  const resCoursesJSON = await resCourses.json();

  let collapse = false;

  if (resCoursesJSON.length != 0) {
    collapse = false;
  } else {
    collapse = true;
  }

  return { props: { fullData, resCoursesJSON, collapse } };
}

export default EPage;
