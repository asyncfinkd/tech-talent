import { useAuthDetector } from "lib/useAuthDetector";
import LoginPage from "modules/login/LoginPage";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return useAuthDetector(context);
};

export default Login;
