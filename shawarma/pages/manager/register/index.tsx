import ManagerRegisterModules from "modules/manager/register";
import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useAuthDetector } from "lib/use-auth-detector";

function ManagerRegisterPages() {
  return (
    <>
      <ManagerRegisterModules />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return useAuthDetector(context);
};

export default ManagerRegisterPages;
