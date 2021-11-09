import { yupResolver } from "@hookform/resolvers/yup";
import { ApplicationContext } from "context/application/ApplicationContext";
import { RegisterInfoRequest } from "features/register/info/register-info.api";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { RegisterCandidateInfoSchema } from "schema/register/candidate/info";
import { Result } from "types/features/register";
import { Input } from "types/register/candidate/info";
import RegisterFooter from "ui/footer/register";
import Header from "ui/header";
import RegisterCandidateInfoForm from "./components/register-candidate-info-form";
import RegisterCandidateInfoHeader from "./components/register-candidate-info-header";

const RegisterCandidateInfoPages = ({ access_token, logged }: any) => {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Input>({
    resolver: yupResolver(RegisterCandidateInfoSchema),
  });

  const { setAccess_Token } = useContext(ApplicationContext);

  const $register = useMutation(({ loginData }: { loginData: Input }) =>
    RegisterInfoRequest(loginData)
  );
  return (
    <>
      <Head>
        <title>Register | Tech Talent</title>
      </Head>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-276">
          <div className="content-0-2-277">
            <div className="marginOnMobile-0-2-134">
              <div className="root-0-2-312">
                <RegisterCandidateInfoHeader />
                <RegisterCandidateInfoForm register={register} />
              </div>
            </div>
          </div>
          <RegisterFooter
            candidateinfo={true}
            candidateInfoOnClick={handleSubmit((data: Input) => {
              $register.mutate(
                { loginData: data },
                {
                  onSuccess: (data: Result) => {
                    document.cookie = `cookie=${data.access_token}`;
                    setAccess_Token({ access_token: data.access_token });
                    router.push("/");
                  },
                }
              );
            })}
          />
        </div>
      </main>
    </>
  );
};

export default RegisterCandidateInfoPages;
