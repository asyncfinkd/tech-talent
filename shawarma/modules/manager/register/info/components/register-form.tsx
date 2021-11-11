import Actions from "actions/manager/info/components/register-form";
import { Button } from "components/button";
import { ApplicationContext } from "context/application/ApplicationContext";
import { ManagerRegisterRequest } from "features/register/manager/info/manager.register.api";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { Props } from "types/register/manager/info";
import SVG from "react-inlinesvg";
import { loading } from "constants/app/strings";

export default function RegisterForm({
  previewImage,
  setPreviewImage,
  image,
  setImage,
  onChangeForImage,
}: any) {
  const [error, setError] = useState<boolean>(false);
  const { register, handleSubmit, formState } = Actions.useForm<Props>({
    resolver: Actions.yupResolver(Actions.schema),
  });

  const { managerInfo, setAccess_Token } = useContext(ApplicationContext);
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
            {image.length > 0 ? (
              <>
                <img
                  className="preview-0-2-107"
                  src={image}
                  onClick={() => {
                    setPreviewImage(true);
                  }}
                />
                <div className="text-0-2-105">
                  <div
                    className="valueContainer-0-2-108"
                    onClick={() => {
                      setPreviewImage(true);
                    }}
                  >
                    <svg
                      className="stroke-0-2-61 eyeIcon-0-2-109"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.1609 12.0526C15.1609 13.7986 13.7449 15.2136 11.9989 15.2136C10.2529 15.2136 8.83789 13.7986 8.83789 12.0526C8.83789 10.3056 10.2529 8.89062 11.9989 8.89062C13.7449 8.89062 15.1609 10.3056 15.1609 12.0526Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.998 19.354C15.806 19.354 19.289 16.616 21.25 12.052C19.289 7.488 15.806 4.75 11.998 4.75H12.002C8.194 4.75 4.711 7.488 2.75 12.052C4.711 16.616 8.194 19.354 12.002 19.354H11.998Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span>Logo</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-0-2-105">
                <span className="placeholder-0-2-106"></span>
              </div>
            )}
            <button
              className="root-0-2-31 pickColorButton-0-2-110 weightMedium-0-2-46 sizeZero-0-2-33 variantBlank-0-2-44 hover__logoqweqlewm"
              style={{ border: "none" }}
              type="button"
              tabIndex={-1}
              onClick={() => {
                if (image.length > 0) {
                  setImage("");
                } else {
                  document.getElementById("mqwelqwmelqwmelqwmel")?.click();
                }
              }}
            >
              {image.length > 0 ? (
                <svg
                  className="fill-0-2-62 closeIcon-0-2-113"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9391 3.39039C15.6523 2.54628 14.9075 2 14.0639 2H9.93592L9.779 2.00633C8.9492 2.07349 8.24111 2.66897 8.02304 3.50533L7.77543 4.76813L7.74642 4.87929C7.62785 5.23928 7.29636 5.48913 6.91772 5.48913H3.73139L3.63214 5.49598C3.27515 5.54564 3 5.85945 3 6.23916C3 6.65338 3.32745 6.98918 3.73139 6.98918L6.91772 6.98918H17.0821L20.2686 6.98918L20.3679 6.98234C20.7248 6.93267 21 6.61887 21 6.23916C21 5.82493 20.6725 5.48913 20.2686 5.48913H17.0821L16.9701 5.48177C16.6025 5.4332 16.2987 5.14872 16.2243 4.76783L15.9874 3.55209L15.9391 3.39039ZM14.9143 5.48913C14.881 5.40445 14.8522 5.31721 14.8282 5.22768L14.79 5.06208L14.5636 3.8928C14.5107 3.68991 14.3473 3.54138 14.1502 3.50742L14.0639 3.50006H9.93592C9.73071 3.50006 9.54829 3.62322 9.47252 3.77803L9.44682 3.84604L9.20979 5.06238C9.18087 5.21048 9.13899 5.35311 9.08551 5.48913H14.9143ZM18.9784 8.72017C19.3475 8.75069 19.6304 9.05716 19.65 9.42605L19.6405 9.63174L19.326 13.483L18.9961 17.2414C18.9263 17.9917 18.8638 18.6245 18.8099 19.1227C18.6225 20.8588 17.4955 21.9323 15.7966 21.9641C13.1494 22.013 10.6048 22.0125 8.13373 21.9591C6.48398 21.9244 5.37366 20.8393 5.18955 19.1297L5.0623 17.8702L4.83994 15.427L4.61216 12.7461L4.35172 9.52788C4.31935 9.11498 4.61951 8.75335 5.02215 8.72016C5.39123 8.68973 5.7183 8.94584 5.79519 9.30677L5.82511 9.60173L6.06966 12.6187L6.33669 15.7459C6.45646 17.0996 6.56034 18.1952 6.64346 18.9648C6.74838 19.939 7.26138 20.4404 8.16411 20.4593C10.6159 20.5124 13.1415 20.5129 15.7701 20.4643C16.7277 20.4464 17.2489 19.9499 17.356 18.9574L17.4827 17.7046C17.5198 17.3185 17.5594 16.8923 17.6014 16.4293L17.8686 13.3538L18.1906 9.4075C18.2204 9.02902 18.5192 8.7389 18.879 8.71882L18.9784 8.72017Z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              ) : (
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
              )}
            </button>
            {!image.length && (
              <input
                type="file"
                accept="image/*"
                id="mqwelqwmelqwmelqwmel"
                onChange={onChangeForImage}
                hidden={true}
                className="logogmqqweml__input"
              />
            )}
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
          {$register.isLoading ? (
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
              onClick={handleSubmit((data: any) => {
                const reData = {
                  companyName: data.companyName,
                  industry: data.industry,
                  phone: data.phone,
                  website: data.website,
                  fullName: managerInfo.fullName,
                  email: managerInfo.email,
                  password: managerInfo.password,
                  logo: image,
                };

                $register.mutate(
                  { loginData: reData, setError },
                  {
                    onSuccess: (data: any) => {
                      document.cookie = `cookie=${data.access_token};path=/`;
                      setAccess_Token({ access_token: data.access_token });
                      router.push("/manager/branding");
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
