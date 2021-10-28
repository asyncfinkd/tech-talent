import React from "react";
import { ErrorMessage } from "components/error-message";

const RegisterForm: React.FC<any> = ({
  register,
  errors,
  errorMessage,
}: any) => {
  const renderEmailClassName = () => {
    if (errors.email || errorMessage) {
      return "invalid-0-2-252";
    }
  };
  return (
    <>
      <div className="inputGroup-0-2-116">
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
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
            className={`input-0-2-251 ${renderEmailClassName()}`}
            {...register("email")}
          />
          <ErrorMessage
            condition={errorMessage}
            element="div"
            className="invalidMessage-0-2-132"
          >
            User with this email is already registered
          </ErrorMessage>
          <ErrorMessage
            element="div"
            className="invalidMessage-0-2-132"
            condition={errors.email}
          >
            {errors?.email?.message}
          </ErrorMessage>
        </div>
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
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
            {...register("password")}
            name="password"
            className={`input-0-2-251 ${errors.password && "invalid-0-2-252"}`}
          />
          <ErrorMessage
            element="div"
            className="invalidMessage-0-2-132"
            condition={errors.password}
          >
            {errors?.password?.message}
          </ErrorMessage>
        </div>
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
            Repeat Password{" "}
            <span
              className="asteriskValid-0-2-249"
              style={{ display: "inline" }}
            >
              *
            </span>
          </label>
          <input
            type="password"
            {...register("repeatPassword")}
            name="repeatPassword"
            className={`input-0-2-251 ${
              errors.repeatPassword && "invalid-0-2-252"
            }`}
          />
          <ErrorMessage
            element="div"
            className="invalidMessage-0-2-132"
            condition={errors.repeatPassword}
          >
            {errors?.repeatPassword?.message}
          </ErrorMessage>
        </div>
        <div className="line-0-2-122">
          <div className="continue-0-2-123">or continue with</div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
