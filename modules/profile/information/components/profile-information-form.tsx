import { yupResolver } from "@hookform/resolvers/yup";
import { ApplicationContext } from "context/application/ApplicationContext";
import React, { useCallback, useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileInformationFormSchema } from "schema/profile/information";
import { ProfileInformationInputProps } from "types/profile/information";
import { useMutation } from "react-query";
import { ProfileInformationRequest } from "features/profile/information/profile-information.api";
import { Result } from "types/features/login";

export default function ProfileInformationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProfileInformationInputProps>({
    resolver: yupResolver(ProfileInformationFormSchema),
  });
  const { access_token, setAccess_Token } = useContext(ApplicationContext);
  const { fullName, phone, socialNetwork } = watch();
  const [fullNameError, setFullNameError] = useState<boolean>(false);

  const $edit = useMutation(
    ({ loginData }: { loginData: ProfileInformationInputProps }) =>
      ProfileInformationRequest(loginData)
  );

  useEffect(() => {
    if (fullName === undefined) {
      setValue("fullName", access_token?.fullName);
    }

    if (phone === undefined) {
      setValue("phone", access_token?.phone);
    }

    if (socialNetwork === undefined) {
      setValue("socialNetwork", access_token?.socialNetwork);
    }
  });

  const memorizedCallback = useCallback(() => {
    if (fullName.length === 0) {
      setFullNameError(true);
    } else {
      setFullNameError(false);
    }
  }, [fullName]);

  useEffect(() => {
    if (fullName !== undefined) {
      memorizedCallback();
    }
  });
  return (
    <>
      <div className="body-0-2-101">
        <section className="root-0-2-115">
          <h2 className="h2-0-2-116">Contact information</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="inputGroup-0-2-117">
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  Full Name
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className={`input-0-2-251`}
                  {...register("fullName")}
                />
              </div>
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  Phone{" "}
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className="input-0-2-123"
                  {...register("phone")}
                />
              </div>
              <div className="root-0-2-119">
                <label className="label-0-2-120">
                  LinkedIn/Dribbble/Behance{" "}
                  <span
                    className="asteriskValid-0-2-121"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="text"
                  className="input-0-2-123"
                  {...register("socialNetwork")}
                />
              </div>
              {$edit.isLoading ? (
                <button
                  className="root-0-2-46 MAX_WIDTH_F button-0-2-118 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                  type="submit"
                  disabled={fullNameError}
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
                        strokeWidth="10"
                        r="35"
                        strokeDasharray="164.93361431346415 56.97787143782138"
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
                    <span>Loading</span>
                  </div>
                </button>
              ) : (
                <button
                  className="root-0-2-46 MAX_WIDTH_F button-0-2-118 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                  type="submit"
                  onClick={handleSubmit(
                    (data: ProfileInformationInputProps) => {
                      $edit.mutate(
                        { loginData: data },
                        {
                          onSuccess: (result: Result) => {
                            document.cookie = `cookie=${result.access_token}`;
                            setAccess_Token({
                              access_token: result.access_token,
                            });
                          },
                        }
                      );
                    }
                  )}
                >
                  Save
                </button>
              )}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
