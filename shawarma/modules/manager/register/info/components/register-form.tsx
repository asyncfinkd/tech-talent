import Actions from "actions/manager/info/components/register-form";
import { ApplicationContext } from "context/application/ApplicationContext";
import { ManagerRegisterRequest } from "features/register/manager/info/manager.register.api";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { Props } from "types/register/manager/info";

export default function RegisterForm() {
  const [error, setError] = useState<boolean>(false);
  const { register, handleSubmit, formState } = Actions.useForm<Props>({
    resolver: Actions.yupResolver(Actions.schema),
  });

  const { managerInfo } = useContext(ApplicationContext);
  const router = Actions.useRouter();

  const $register = useMutation(
    ({ loginData, setError }: { loginData: any; setError: any }) =>
      ManagerRegisterRequest({ loginData, setError })
  );
  return (
    <>
      <div className="inputGroup-0-2-116">
        {Actions.Form.Fields.map((item: any) => {
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
                  placeholder={item.placeholder}
                  {...register(item.name)}
                />
                <Actions.ErrorMessage
                  element="div"
                  condition={Actions.get(formState.errors, item.name)}
                  className="invalidMessage-0-2-253"
                >
                  {item?.required?.message}
                </Actions.ErrorMessage>
              </div>
            </>
          );
        })}
        <div className="root-0-2-99">
          <label className="label-0-2-100">
            Logo{" "}
            <span className="asteriskValid-0-2-101" style={{ display: "none" }}>
              *
            </span>
          </label>
          <div className="input-0-2-103" tabIndex={0}>
            <div className="text-0-2-105">
              <span className="placeholder-0-2-106"></span>
            </div>
            <button
              className="root-0-2-31 pickColorButton-0-2-110 weightMedium-0-2-46 sizeZero-0-2-33 variantBlank-0-2-44 hover__logoqweqlewm"
              style={{ border: "none" }}
              type="button"
              tabIndex={-1}
            >
              <svg
                className="fill-0-2-30"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.1274 4.86956C17.6346 2.37681 13.5785 2.37681 11.0857 4.86956L3.33521 12.6199C1.55482 14.4005 1.55493 17.2978 3.33553 19.0783C4.22588 19.9687 5.39503 20.4138 6.56464 20.4137C7.73394 20.4136 8.90363 19.9686 9.79387 19.0783L16.8982 11.9739C17.9666 10.9057 17.9667 9.16734 16.8983 8.09875C15.8299 7.03042 14.0914 7.03046 13.0232 8.09894L8.3773 12.7447C8.02062 13.1013 8.02062 13.6797 8.37722 14.0364C8.73398 14.3931 9.31219 14.3931 9.66895 14.0364L14.3149 9.39051C14.671 9.03437 15.2505 9.03438 15.6066 9.39039C15.9627 9.7466 15.9627 10.326 15.6065 10.6821L8.50226 17.7866C7.43382 18.8549 5.69553 18.8551 4.62717 17.7867C3.55885 16.7183 3.55873 14.9799 4.62694 13.9115L12.3774 6.16124C14.1579 4.38081 17.0552 4.38073 18.8358 6.16132C19.6984 7.02382 20.1734 8.17066 20.1734 9.39047C20.1734 10.6103 19.6984 11.7571 18.8357 12.6197L11.0855 20.3702C10.7288 20.7268 10.7288 21.3051 11.0856 21.6618C11.2639 21.8402 11.4977 21.9293 11.7314 21.9293C11.9651 21.9293 12.1989 21.8401 12.3772 21.6618L20.1273 13.9115C21.335 12.7039 22 11.0984 22 9.39055C22.0001 7.68265 21.335 6.0771 20.1274 4.86956Z"></path>
              </svg>
            </button>
            <input type="file" accept="image/*" hidden />
          </div>
        </div>
        <div className="buttonField-0-2-237">
          <button
            type="submit"
            className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            onClick={() => {
              router.push("/manager/register");
            }}
          >
            Back
          </button>
          <button
            type="submit"
            className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            onClick={handleSubmit((data: any) => {
              const reData = {
                companyName: data.companyName,
                industry: data.industry,
                phone: data.phone,
                website: data.website,
                email: managerInfo.email,
                password: managerInfo.password,
              };

              $register.mutate(
                { loginData: reData, setError },
                {
                  onSuccess: (data: any) => {
                    console.log(data);
                  },
                }
              );
              console.log(reData);
            })}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
