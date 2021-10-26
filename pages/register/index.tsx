import { useAuthDetector } from "lib/useAuthDetector";
import RegisterPage from "modules/register/RegisterPage";
import { GetServerSidePropsContext } from "next";

function Register() {
  return (
    <>
      <RegisterPage />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return useAuthDetector(context);
}

export default Register;
