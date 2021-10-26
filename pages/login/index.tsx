import { useAuthDetector } from "lib/useAuthDetector";
import LoginPage from "modules/login/LoginPage";
import { GetServerSidePropsContext } from "next";

function Login() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return useAuthDetector(context);
}

export default Login;
