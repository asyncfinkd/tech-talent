import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { RegisterCandidateInfoSchema } from "schema/register/candidate/info";
import { Result } from "types/features/register";
import { Input } from "types/register/candidate/info";
import RegisterFooter from "ui/footer/register";
import Header from "ui/header";
import RegisterCandidateInfoForm from "./components/register-candidate-info-form";
import RegisterCandidateInfoHeader from "./components/register-candidate-info-header";

const RegisterCandidateInfoPages: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(RegisterCandidateInfoSchema) });
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
                <RegisterCandidateInfoForm
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          </div>
          <RegisterFooter
            candidateinfo={true}
            candidateInfoOnClick={handleSubmit((data: Result) => {
              console.log(data);
            })}
          />
        </div>
      </main>
    </>
  );
};

export default RegisterCandidateInfoPages;
