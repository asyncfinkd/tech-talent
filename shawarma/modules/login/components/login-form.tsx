import Actions from "actions/login/modules/components";
import React, { useContext, useState } from "react";
import { LoginInputsResult, Props } from "types/login";
import { Result } from "types/features/login";

const LoginForm: React.FC = () => {
  const router = Actions.useRouter();
  const { register, handleSubmit, formState } = Actions.useForm<Props>({
    resolver: Actions.yupResolver(Actions.schema),
  });

  const { setAccess_Token } = useContext(Actions.ApplicationContext);
  const [error, setError] = useState<boolean>(false);

  const $login = Actions.useMutation(({ loginData }: { loginData: Props }) =>
    Actions.LoginRequest({ loginData, setError })
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
          {Actions.LoginInputs.Fields.map((item: any) => {
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
                      Actions.get(formState.errors, item.name) &&
                      "invalid-0-2-252"
                    }`}
                    {...register(item.name)}
                  />
                  <Actions.ErrorMessage
                    element="div"
                    condition={Actions.get(formState.errors, item.name)}
                    className="invalidMessage-0-2-253"
                  >
                    {item.required.message}
                  </Actions.ErrorMessage>
                </div>
              </>
            );
          })}
        </div>
        <Actions.ErrorMessage
          element="div"
          className="errorMessage-0-2-111"
          condition={error}
        >
          Incorrect email or password
        </Actions.ErrorMessage>
        <div className="buttonField-0-2-237">
          <Actions.Link href="/forgot">
            <a className="forgotPassword-0-2-243">Forgot Password?</a>
          </Actions.Link>
          {$login.isLoading ? (
            <Actions.Button
              type="submit"
              className="root-0-2-46 button-0-2-105 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            >
              <div className="loading-0-2-112">
                <Actions.SVG src={Actions.loading} />
                <span>Loading</span>
              </div>
            </Actions.Button>
          ) : (
            <Actions.Button
              type="submit"
              className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            >
              Login
            </Actions.Button>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
