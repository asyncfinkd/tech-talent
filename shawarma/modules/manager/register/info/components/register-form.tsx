import React from "react";

export default function RegisterForm() {
  return (
    <>
      <div className="inputGroup-0-2-116">
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
            Company Name{" "}
            <span
              className="asteriskValid-0-2-249"
              style={{ display: "inline" }}
            >
              *
            </span>
          </label>
          <input
            type="text"
            className={`input-0-2-251`}
            placeholder="Enter name"
          />
        </div>
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
            Industry{" "}
            <span
              className="asteriskValid-0-2-249"
              style={{ display: "inline" }}
            >
              *
            </span>
          </label>
          <input
            type="text"
            className={`input-0-2-251`}
            placeholder="Enter industry"
          />
        </div>
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
            Phone{" "}
            <span
              className="asteriskValid-0-2-249"
              style={{ display: "inline" }}
            >
              *
            </span>
          </label>
          <input
            type="text"
            className={`input-0-2-251`}
            placeholder="Enter mobile number"
          />
        </div>
        <div className="root-0-2-126 input-0-2-117">
          <label className="label-0-2-127">
            Website{" "}
            <span
              className="asteriskValid-0-2-249"
              style={{ display: "inline" }}
            >
              *
            </span>
          </label>
          <input
            type="text"
            className={`input-0-2-251`}
            placeholder="Enter webpage URL"
          />
        </div>
      </div>
    </>
  );
}
