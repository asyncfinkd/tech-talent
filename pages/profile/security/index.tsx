import SecurityPages from "../../../modules/profile/security";
import env from "application/environment/env.json";
import jwt_decode from "jwt-decode";
import { useState } from "react";

function SecurityPage({ data, token }: any) {
  const [logged, setLogged] = useState<any>(data);
  const [access_token, setAccess_Token] = useState<any>(token);

  return (
    <>
      <SecurityPages access_token={access_token} logged={logged} />
    </>
  );
}

export async function getServerSideProps(ctx: any) {
  const { req, res } = ctx;
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

  return { props: { data: logged, token } };
}

export default SecurityPage;
