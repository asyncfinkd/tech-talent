import Edu from "modules/edu";
import env from "application/environment/env.json";
import { EduResultProps } from "types/edu";
import { InferGetServerSidePropsType } from "next";

function EduPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Edu fullData={data} />
    </>
  );
}

export default EduPage;

export async function getServerSideProps() {
  const req = await fetch(`${env.host}/api/get/edu`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const data: EduResultProps = await req.json();

  return { props: { data } };
}
