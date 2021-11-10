import { GetServerSidePropsContext } from "next";

export const useAuthDetector = (context: GetServerSidePropsContext) => {
  const { req, res } = context;
  const { cookies } = req;
  if (cookies.cookie) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    return { props: {} };
  }
};
