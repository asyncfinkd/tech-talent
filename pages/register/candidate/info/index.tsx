import { useAuthDetector } from "lib/useAuthDetector";
import RegisterCandidateInfoPages from "modules/register/candidate/info/RegisterCandidateInfoPages";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

function RegisterCandidateInfo() {
  return (
    <>
      <RegisterCandidateInfoPages />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return useAuthDetector(context);
};

export default RegisterCandidateInfo;
