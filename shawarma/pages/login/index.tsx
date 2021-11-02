import Actions from "actions/login";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

function Login() {
  return (
    <>
      <Actions.LoginPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return Actions.useAuthDetector(context);
};

export default Login;
