import { Button } from "components/button";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Props } from "types/login";
import { schema } from "schema/login";
import ErrorMessage from "components/error-message";
import { LoginRequest } from "features/login/login.api";
import { useMutation } from "react-query";
import { Result } from "types/features/login";
import { ApplicationContext } from "context/application/ApplicationContext";
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });
  const { setAccess_Token, setLogged } = useContext(ApplicationContext);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const $login = useMutation(({ loginData }: { loginData: Props }) =>
    LoginRequest(loginData, setErrorMessage)
  );

  return (
    <>
      <form
        onSubmit={handleSubmit((data: Props) => {
          $login.mutate(
            { loginData: data },
            {
              onSuccess: (data: Result) => {
                document.cookie = `cookie=${data.access_token}`;
                setAccess_Token({ access_token: data.access_token });
                setLogged(true);
                router.push("/");
              },
            }
          );
        })}
      >
        <div>
          <div className="root-0-2-247">
            <label className="label-0-2-248">
              Email{" "}
              <span
                className="asteriskValid-0-2-249"
                style={{ display: "inline" }}
              >
                *
              </span>
            </label>
            <input
              type="text"
              className={`input-0-2-251 ${errors.email && "invalid-0-2-252"}`}
              {...register("email")}
            />
            <ErrorMessage
              element="div"
              condition={errors.email}
              className="invalidMessage-0-2-253"
            >
              Valid email is required
            </ErrorMessage>
          </div>
          <div className="root-0-2-247">
            <label className="label-0-2-248">
              Password{" "}
              <span
                className="asteriskValid-0-2-249"
                style={{ display: "inline" }}
              >
                *
              </span>
            </label>
            <input
              type="password"
              className={`input-0-2-251 ${
                errors.password && "invalid-0-2-252"
              }`}
              {...register("password")}
            />
            <ErrorMessage
              element="div"
              className="invalidMessage-0-2-253"
              condition={errors.password}
            >
              Password is required
            </ErrorMessage>
          </div>
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
          <Button
            type="submit"
            className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
