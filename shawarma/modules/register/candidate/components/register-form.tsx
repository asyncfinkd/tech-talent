import React from "react";
import { ErrorMessage } from "components/error-message";
import { Form } from "fixtures/register/candidate";

const RegisterForm: React.FC<any> = ({
  register,
  errors,
  errorMessage,
}: any) => {
  const renderClassname = (item: any) => {
    if (item.props) {
      if (errors[item.name] || errorMessage) {
        return "invalid-0-2-252";
      }
    } else {
      if (errors[item.name]) {
        return "invalid-0-2-252";
      }
    }
  };
  return (
    <>
      <div className="inputGroup-0-2-116">
        {Form.Fields.map((item: any) => {
          return (
            <>
              <div className="root-0-2-126 input-0-2-117">
                <label className="label-0-2-127">
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
                  className={`input-0-2-251 ${renderClassname(item)}`}
                  {...register(item.name)}
                />
                {item.props && (
                  <ErrorMessage
                    condition={errorMessage}
                    element="div"
                    className="invalidMessage-0-2-132"
                  >
                    User with this email is already registered
                  </ErrorMessage>
                )}
                <ErrorMessage
                  element="div"
                  className="invalidMessage-0-2-132"
                  condition={errors[item.name]}
                >
                  {item.required.message}
                </ErrorMessage>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RegisterForm;
