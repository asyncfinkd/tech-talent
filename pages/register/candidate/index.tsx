import { useAuthDetector } from "lib/useAuthDetector";
import RegisterCandidatePages from "modules/register/candidate/RegisterCandidatePages";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

function RegisterCandidate() {
  return (
    <>
      <RegisterCandidatePages />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return useAuthDetector(context);
};

export default RegisterCandidate;
