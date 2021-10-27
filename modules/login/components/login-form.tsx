import { Button } from "components/button";
import React, { useContext, useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Props } from "types/login";
import { schema } from "schema/login";
import { ErrorMessage } from "components/error-message";
import { LoginRequest } from "features/login/login.api";
import { useMutation } from "react-query";
import { Result } from "types/features/login";
import { ApplicationContext } from "context/application/ApplicationContext";
import { useRouter } from "next/router";
import { LoginInputs } from "fixtures/login";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });
  const { setAccess_Token } = useContext(ApplicationContext);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [forUser, setForUser] = useState<any>(true);

  const $login = useMutation(({ loginData }: { loginData: Props }) =>
    LoginRequest(loginData, setErrorMessage, forUser)
  );

  return (
    <>
      <form
        onSubmit={handleSubmit((data: Props) => {
          $login.mutate(
            { loginData: data },
            {
              onSuccess: (data: Result) => {
                document.cookie = `cookie=${data.access_token};path=/`;
                setAccess_Token({ access_token: data.access_token });
                router.push("/");
              },
            }
          );
        })}
      >
        <div>
          {LoginInputs.Fields.map((item: any) => {
            return (
              <>
                <div className="root-0-2-247">
                  <label className="label-0-2-248">
                    {item.title}{" "}
                    <span
                      className="asteriskValid-0-2-249"
                      style={{ display: "inline" }}
                    >
                      *
                    </span>
                  </label>
                  <input
                    type={item.type}
                    className={`input-0-2-251 ${
                      errors[item.name] && "invalid-0-2-252"
                    }`}
                    {...register(item.name)}
                  />
                  <ErrorMessage
                    element="div"
                    condition={errors[item.name]}
                    className="invalidMessage-0-2-253"
                  >
                    {item.required.message}
                  </ErrorMessage>
                </div>
              </>
            );
          })}
        </div>
        <ErrorMessage
          element="div"
          className="errorMessage-0-2-111"
          condition={errorMessage}
        >
          Incorrect email or password
        </ErrorMessage>
        <div className="buttonField-0-2-237">
          <a className="forgotPassword-0-2-243" href="/forgot">
            Forgot Password?
          </a>
          {$login.isLoading ? (
            <Button
              type="submit"
              className="root-0-2-46 button-0-2-105 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            >
              <div className="loading-0-2-112">
                <svg
                  className="stroke-0-2-35 spinner-0-2-113"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid"
                >
                  <circle
                    cx="50"
                    cy="50"
                    fill="none"
                    strokeWidth="10"
                    r="35"
                    strokeDasharray="164.93361431346415 56.97787143782138"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      repeatCount="indefinite"
                      dur="1s"
                      values="0 50 50;360 50 50"
                      keyTimes="0;1"
                    ></animateTransform>
                  </circle>
                </svg>
                <span>Loading</span>
              </div>
            </Button>
          ) : (
            <Button
              type="submit"
              className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            >
              Login
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
