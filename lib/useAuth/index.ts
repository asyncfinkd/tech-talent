import jwt_decode from "jwt-decode";
import { DecodedAccess_Token__MOCKS__ } from "mocks/c";
import { GetServerSidePropsContext } from "next";
import { DecodedAccess_Token } from "types/global";

export const useAuth = async ({
  ctx,
  wantAuthentication,
}: {
  ctx: GetServerSidePropsContext;
  wantAuthentication?: boolean;
}) => {
  const { req, res } = ctx;
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
  } else {
    if (wantAuthentication) {
      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
  }

  return { props: { data: logged, token } };
};
