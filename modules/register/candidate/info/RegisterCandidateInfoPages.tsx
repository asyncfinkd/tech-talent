import type { NextPage } from "next";
import Head from "next/head";
import RegisterFooter from "ui/footer/register";
import Header from "ui/header";
import RegisterCandidateInfoForm from "./components/register-candidate-info-form";
import RegisterCandidateInfoHeader from "./components/register-candidate-info-header";

const RegisterCandidateInfoPages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-276">
          <div className="content-0-2-277">
            <div className="marginOnMobile-0-2-134">
              <div className="root-0-2-312">
                <RegisterCandidateInfoHeader />
                <RegisterCandidateInfoForm />
              </div>
            </div>
          </div>
          <RegisterFooter candidateinfo={true} />
        </div>
      </main>
    </>
  );
};

export default RegisterCandidateInfoPages;
