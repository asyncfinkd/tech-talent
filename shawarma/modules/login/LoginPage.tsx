import Actions from "actions/login/modules";
import React from "react";
import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <>
      <Actions.Head>
        <title>Welcome | Tech Talent</title>
      </Actions.Head>
      <Actions.Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-134">
          <div className="form-0-2-234">
            <Actions.LoginHeader />
            <Actions.LoginForm />
          </div>
        </div>
      </main>
      <Actions.Footer />
    </>
  );
};

export default Login;
