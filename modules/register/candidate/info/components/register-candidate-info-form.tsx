import React from "react";

const RegisterCandidateInfoForm: React.FC<any> = ({ register }: any) => {
  return (
    <>
      <div className="inputGroup-0-2-317">
        <div className="root-0-2-250 input-0-2-318">
          <label className="label-0-2-251">
            First Name & Last Name{" "}
            <span className="asteriskValid-0-2-252" style={{ display: "none" }}>
              *
            </span>
          </label>
          <input
            type="text"
            className="input-0-2-254"
            {...register("fullName")}
          />
        </div>
        <div className="root-0-2-250 input-0-2-318">
          <label className="label-0-2-251">
            Phone{" "}
            <span className="asteriskValid-0-2-252" style={{ display: "none" }}>
              *
            </span>
          </label>
          <input type="text" className="input-0-2-254" {...register("phone")} />
        </div>
        <div className="root-0-2-250 input-0-2-318">
          <label className="label-0-2-251">
            LinkedIn/Dribbble/Behance{" "}
            <span className="asteriskValid-0-2-252" style={{ display: "none" }}>
              *
            </span>
          </label>
          <input
            type="text"
            className="input-0-2-254"
            {...register("socialNetwork")}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterCandidateInfoForm;
