import { Form } from "fixtures/register/candidate/info";
import React from "react";

const RegisterCandidateInfoForm: React.FC<any> = ({ register }: any) => {
  return (
    <>
      <div className="inputGroup-0-2-317">
        {Form.Fields.map((item: any) => {
          return (
            <>
              <div className="root-0-2-250 input-0-2-318">
                <label className="label-0-2-251">
                  {item.title}{" "}
                  <span
                    className="asteriskValid-0-2-252"
                    style={{ display: "none" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type={item.type}
                  className="input-0-2-254"
                  {...register(item.name)}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RegisterCandidateInfoForm;
