import React from "react";
import { NextPage } from "next";
import Header from "ui/header";
import Footer from "ui/footer";
import Head from "next/head";
import LoginForm from "modules/login/components/login-form";
import LoginHeader from "modules/login/components/login-header";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="marginOnMobile-0-2-134">
          <div className="form-0-2-234">
            <LoginHeader />
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
