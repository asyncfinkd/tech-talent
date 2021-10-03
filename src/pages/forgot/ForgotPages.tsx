import React from "react";
import { Helmet } from "react-helmet";

const ForgotPages: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Forgot Password? | Tech Talent</title>
      </Helmet>
      <main className="main-0-2-2">
        <div className="root-0-2-254">
          <h1 className="h1-0-2-255">Forgot Password?</h1>
          <div className="caption-0-2-256">Enter Your Email</div>
          <form>
            <div className="inputGroup-0-2-257">
              <div className="root-0-2-117 input-0-2-258">
                <label className="label-0-2-118">
                  Email{" "}
                  <span
                    className="asteriskValid-0-2-119"
                    style={{ display: "inline" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="input-0-2-121"
                  required={true}
                  value=""
                />
              </div>
              <button className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
                Send password reset email
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ForgotPages;
