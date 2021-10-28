import React, { useState } from "react";
import Header from "ui/header";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { Props } from "types/forgot";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotSchema } from "schema/forgot";
import { useMutation } from "react-query";
import { ForgotRequest } from "features/forgot/forgot.api";
import { Result } from "types/features/forgot";
import { useRouter } from "next/router";

export default function ForgotModules({ access_token, logged }: any) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(ForgotSchema) });

  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const $forgot = useMutation(({ loginData }: { loginData: Props }) =>
    ForgotRequest(loginData, setShowErrorMessage)
  );

  return (
    <>
      <Head>
        <title>Forgot Password? | Tech Talent</title>
      </Head>
      <Header access_token={access_token} logged={logged} ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-254">
          <h1 className="h1-0-2-255">Forgot Password?</h1>
          <div className="caption-0-2-256">Enter Your Email</div>
          <form
            onSubmit={handleSubmit((data: Props) => {
              $forgot.mutate(
                { loginData: data },
                {
                  onSuccess: () => {
                    router.push("/forgot/thanks");
                  },
                }
              );
            })}
          >
            <div className="inputGroup-0-2-257">
              <div className="root-0-2-117 input-0-2-258">
                <label className="label-0-2-118">
                  Email{" "}
                  <span
                    className={"asteriskValid-0-2-249"}
                    style={{ display: "inline" }}
                  >
                    *
                  </span>
                </label>
                <input
                  className={`input-0-2-251 ${
                    errors.email && "invalid-0-2-252"
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <div className="invalidMessage-0-2-132">
                    {errors.email.message}
                  </div>
                )}
                {showErrorMessage && (
                  <div className="invalidMessage-0-2-132">
                    Email does not exist
                  </div>
                )}
              </div>
              <button className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
                Send password reset email
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
