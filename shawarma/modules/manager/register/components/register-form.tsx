import Actions from "actions/manager/register/components/register-form";
import React from "react";
import { Props } from "types/manager/register";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = Actions.useForm<Props>({
    resolver: Actions.yupResolver(Actions.ManagerRegisterSchema),
  });
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
          <input type="text" className="input-0-2-251" />
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
          <input type="text" className="input-0-2-251" />
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
          <input type="text" className="input-0-2-251" />
        </div>
        <div className="buttonField-0-2-237">
          <Actions.Link href="/login">
            <a className="forgotPassword-0-2-243">Already Have An Account?</a>
          </Actions.Link>
          <button
            type="submit"
            className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
