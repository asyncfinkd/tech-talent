import { Button } from "components/button";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Props } from "types/login";
import { schema } from "schema/login";
import ErrorMessage from "components/error-message";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });
  return (
    <>
      <form
        onSubmit={handleSubmit((data: Props) => {
          console.log(data);
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
              className={`input-0-2-251 ${
                errors.email && "invalid-0-2-252"
              }`}
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
