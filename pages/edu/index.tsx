import Edu from "modules/edu";
import env from "application/environment/env.json";

function EduPage({ data }: any) {
  return (
    <>
      <Edu data={data} />
    </>
  );
}

export default EduPage;

export async function getServerSideProps() {
  const req = await fetch(`${env.host}/api/get/edu`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  });
  const data = await req.json();

  return { props: { data } };
}
