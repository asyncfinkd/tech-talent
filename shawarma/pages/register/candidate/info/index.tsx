import RegisterCandidateInfoPages from "modules/register/candidate/info/RegisterCandidateInfoPages";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { useAuth } from "lib/use-auth";
import { DecodedAccess_Token } from "types/global";
import { useState } from "react";

function RegisterCandidateInfo({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [logged, setLogged] = useState<boolean>(data);
  const [access_token, setAccess_Token] = useState<DecodedAccess_Token>(token);

  return (
    <>
      <RegisterCandidateInfoPages access_token={access_token} logged={logged} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ ctx, wantAuthentication: true });
};

export default RegisterCandidateInfo;
