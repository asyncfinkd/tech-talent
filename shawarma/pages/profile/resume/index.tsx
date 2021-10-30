import { useAuth } from "lib/useAuth";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import React from "react";

function ProfileResumePage({
  data,
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <p>Hello</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ ctx, wantAuthentication: true });
};

export default ProfileResumePage;
