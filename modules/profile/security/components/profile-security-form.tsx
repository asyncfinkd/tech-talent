import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "components/error-message";
import { ProfileSecurityRequest } from "features/profile/security/profile-security.api";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ProfileSecuritySchema } from "schema/profile/security";
import { Result } from "types/features/profile/security";
import { SecurityInputProps } from "types/profile/security";

export default function ProfileSecurityForm({ access_token }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecurityInputProps>({
    resolver: yupResolver(ProfileSecuritySchema),
  });

  const $edit = useMutation(
    ({ loginData }: { loginData: SecurityInputProps }) =>
      ProfileSecurityRequest(loginData)
  );

  return (
    <>
      <div className="body-0-2-101">
        <section className="root___0__2__183">
          <h2 className="h2-0-2-184">Security</h2>
          <form
            onSubmit={handleSubmit((data: SecurityInputProps) => {
              $edit.mutate(
                { loginData: data },
                {
                  onSuccess: (result: Result) => {
                    console.log(result);
                  },
                }
              );
            })}
          >
            <div className="inputGroup-0-2-185">
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  Email{" "}
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="input-0-2-123"
                  disabled={true}
                  value={access_token.email}
                />
              </div>
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  Current password{" "}
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="password"
                  className={`input-0-2-251 ${
                    errors.currentPassword && "invalid-0-2-252"
                  }`}
                  {...register("currentPassword")}
                />
                <ErrorMessage
                  element="div"
                  className="invalidMessage-0-2-132"
                  condition={errors.currentPassword}
                >
                  {errors?.currentPassword?.message}
                </ErrorMessage>
              </div>
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  New password{" "}
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="password"
                  className={`input-0-2-251 ${
                    errors.newPassword && "invalid-0-2-252"
                  }`}
                  {...register("newPassword")}
                />
                <ErrorMessage
                  element="div"
                  className="invalidMessage-0-2-132"
                  condition={errors.newPassword}
                >
                  {errors?.newPassword?.message}
                </ErrorMessage>
              </div>
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  Repeat password{" "}
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="password"
                  className={`input-0-2-251 ${
                    errors.repeatPassword && "invalid-0-2-252"
                  }`}
                  {...register("repeatPassword")}
                />
                <ErrorMessage
                  element="div"
                  className="invalidMessage-0-2-132"
                  condition={errors.repeatPassword}
                >
                  {errors?.repeatPassword?.message}
                </ErrorMessage>
              </div>
              {/* {mutation.isLoading ? (
                    <button
                      className="root-0-2-46 button-0-2-186 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                      type="submit"
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
                            stroke-width="10"
                            r="35"
                            stroke-dasharray="164.93361431346415 56.97787143782138"
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
                        <span>{t("LOADING")}</span>
                      </div>
                    </button>
                  ) : ( */}
              <button
                className="root-0-2-46 button-0-2-186 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                type="submit"
              >
                Save
              </button>
              {/* )} */}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
