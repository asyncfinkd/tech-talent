import Actions from "actions/manager/register/components/register-form";
import { Button } from "components/button";
import { ManagerRegisterRequest } from "features/register/manager/manager.register.api";
import React from "react";
import { useMutation } from "react-query";
import { Result } from "types/features/profile/security";
import { Props } from "types/manager/register";
import SVG from "react-inlinesvg";
import { loading } from "constants/app/strings";

export default function RegisterForm() {
  const [error, setError] = Actions.useState<boolean>(false);

  const { register, handleSubmit, formState, setValue } =
    Actions.useForm<Props>({
      resolver: Actions.yupResolver(Actions.ManagerRegisterSchema),
    });

  const router = Actions.useRouter();
  const { managerInfo, setManagerInfo } = Actions.useContext(
    Actions.ApplicationContext
  );

  const $registeredCheck = useMutation(
    ({ loginData, setError }: { loginData: Props; setError: any }) =>
      ManagerRegisterRequest({ loginData, setError })
  );

  Actions.useEffect(() => {
    const values = [
      {
        condition: managerInfo.fullName,
        value: "fullName",
      },
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

  const renderClassname = (item: any) => {
    if (item.props) {
      if (Actions.get(formState.errors, item.name) || error) {
        return "invalid-0-2-252";
      }
    } else {
      if (Actions.get(formState.errors, item.name)) {
        return "invalid-0-2-252";
      }
    }
  };
  return (
    <>
      <div className="inputGroup-0-2-116">
        {Actions.Form.Fields.map((item: any) => {
          return (
            <>
              <div className="root-0-2-126 input-0-2-117">
                <label className="label-0-2-127">
                  {item.title}{" "}
                  {item?.required?.message && (
                    <span
                      className="asteriskValid-0-2-249"
                      style={{ display: "inline" }}
                    >
                      *
                    </span>
                  )}
                </label>
                <input
                  type={item.type}
                  className={`input-0-2-251 ${renderClassname(item)}`}
                  {...register(item.name)}
                />
                <Actions.ErrorMessage
                  element="div"
                  condition={Actions.get(formState.errors, item.name)}
                  className="invalidMessage-0-2-253"
                >
                  {item?.required?.message}
                </Actions.ErrorMessage>
                {item.props && (
                  <Actions.ErrorMessage
                    element="div"
                    condition={error}
                    className="invalidMessage-0-2-253"
                  >
                    User with this email is already registered
                  </Actions.ErrorMessage>
                )}
              </div>
            </>
          );
        })}
        <div className="buttonField-0-2-237">
          <Actions.Link href="/login">
            <a className="forgotPassword-0-2-243">Already Have An Account?</a>
          </Actions.Link>
          {$registeredCheck.isLoading ? (
            <Button
              type="submit"
              className="root-0-2-46 button-0-2-105 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            >
              <div className="loading-0-2-112">
                <SVG src={loading} />
                <span>Loading</span>
              </div>
            </Button>
          ) : (
            <button
              type="submit"
              className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
              onClick={handleSubmit((data: Props) => {
                $registeredCheck.mutate(
                  { loginData: data, setError },
                  {
                    onSuccess: (res: Result) => {
                      setManagerInfo(data);
                      router.push(`/manager/register/info`);
                    },
                  }
                );
              })}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
