import Actions from "actions/manager/register/components/register-form";
import { ErrorMessage } from "components/error-message";
import { ApplicationContext } from "context/application/ApplicationContext";
import { Form } from "fixtures/register/company";
import React, { useContext } from "react";
import { Props } from "types/manager/register";

export default function RegisterForm() {
  const { register, handleSubmit, formState, setValue } =
    Actions.useForm<Props>({
      resolver: Actions.yupResolver(Actions.ManagerRegisterSchema),
    });

  const router = Actions.useRouter();
  const { managerInfo, setManagerInfo } = useContext(ApplicationContext);

  Actions.useEffect(() => {
    const values = [
      {
        condition: managerInfo.email,
        value: "email",
      },
      {
        condition: managerInfo.password,
        value: "password",
      },
      {
        condition: managerInfo.repeatPassword,
        value: "repeatPassword",
      },
    ];

    values.map((item: any) => {
      if (item.condition) {
        setValue(item.value, item.condition);
      }
    });
  });
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
                  className={`input-0-2-251 ${
                    Actions.get(formState.errors, item.name) &&
                    "invalid-0-2-252"
                  }`}
                  {...register(item.name)}
                />
                <ErrorMessage
                  element="div"
                  condition={Actions.get(formState.errors, item.name)}
                  className="invalidMessage-0-2-253"
                >
                  {item.required.message}
                </ErrorMessage>
              </div>
            </>
          );
        })}
        <div className="buttonField-0-2-237">
          <Actions.Link href="/login">
            <a className="forgotPassword-0-2-243">Already Have An Account?</a>
          </Actions.Link>
          <button
            type="submit"
            className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            onClick={handleSubmit((data: Props) => {
              setManagerInfo(data);
              router.push(`/manager/register/info`);
            })}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
