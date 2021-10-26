import { useAuthDetector } from "lib/useAuthDetector";
import RegisterCandidatePages from "modules/register/candidate/RegisterCandidatePages";
import { GetServerSidePropsContext } from "next";

function RegisterCandidate() {
  return (
    <>
      <RegisterCandidatePages />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return useAuthDetector(context);
}

export default RegisterCandidate;
