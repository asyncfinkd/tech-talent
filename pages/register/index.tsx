import { useAuthDetector } from "lib/useAuthDetector";
import RegisterPage from "modules/register/RegisterPage";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

function Register() {
  return (
    <>
      <RegisterPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return useAuthDetector(context);
};

export default Register;
