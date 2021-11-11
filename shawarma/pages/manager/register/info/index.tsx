import React from "react";
import ManagerRegisterInfoModules from "modules/manager/register/info";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useAuthDetector } from "lib/use-auth-detector";

function ManagerRegisterInfoPages() {
  return (
    <>
      <ManagerRegisterInfoModules />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return useAuthDetector(context);
};

export default ManagerRegisterInfoPages;
