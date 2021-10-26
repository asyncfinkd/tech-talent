import { useAuthDetector } from "lib/useAuthDetector";
import RegisterCandidateInfoPages from "modules/register/candidate/info/RegisterCandidateInfoPages";
import { GetServerSidePropsContext } from "next";

function RegisterCandidateInfo() {
  return (
    <>
      <RegisterCandidateInfoPages />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return useAuthDetector(context);
}

export default RegisterCandidateInfo;
