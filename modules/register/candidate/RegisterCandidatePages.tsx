import RegisterFooter from "ui/footer/register";
import Header from "ui/header";
import type { NextPage } from "next";
import React, { useContext } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "schema/register";
import { Input } from "types/register/candidate";
import RegisterForm from "./components/register-form";
import RegisterHeader from "./components/register-header";
import RegisterCandidatePagesFooter from "./components/register-footer";
import { useMutation } from "react-query";
import { RegisterRequest } from "features/register/register.api";
import { Result } from "types/features/register";
import { useRouter } from "next/router";
import { ApplicationContext } from "context/application/ApplicationContext";

const CandidatePage: NextPage = () => {
  const router = useRouter();
  const interest = router.query.fieldType;

  const { setAccess_Token, setLogged } = useContext(ApplicationContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(RegisterSchema) });

  const $register = useMutation(
    ({
      loginData,
      interest,
    }: {
      loginData: Input;
      interest: string | string[] | undefined;
    }) => RegisterRequest(loginData, interest)
  );

  return (
    <>
      <Head>
        <title>Register | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div>
          <div className="content-0-2-101">
            <div className="marginOnMobile-0-2-111">
              <div className="root-0-2-113">
                <RegisterHeader />
                <RegisterForm register={register} errors={errors} />
                <RegisterCandidatePagesFooter />
              </div>
            </div>
          </div>
        </div>
      </main>
      <RegisterFooter
        candidate={true}
        onClick={handleSubmit((data: Input) => {
          $register.mutate(
            { loginData: data, interest },
            {
              onSuccess: (data: Result) => {
                document.cookie = `cookie=${data.access_token}`;
                setAccess_Token({ access_token: data.access_token });
                setLogged(true);
                router.push(`/register/candidate/info?fieldType=${interest}`);
              },
            }
          );
        })}
      />
    </>
  );
};

export default CandidatePage;
