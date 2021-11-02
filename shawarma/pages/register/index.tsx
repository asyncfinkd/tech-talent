import Actions from "actions/register/pages";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

function Register() {
  return (
    <>
      <Actions.RegisterPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return Actions.useAuthDetector(context);
};

export default Register;
