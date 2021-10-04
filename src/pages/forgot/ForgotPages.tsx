import axios from "axios";
import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import env from "../../application/environment/env.json";

const ForgotPages: React.FC = () => {
  const [email, setEmail] = useState<String | any>("");
  const [showErrorMessage, setShowErrorMessage] = useState<Boolean>(false);
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>Forgot Password? | Tech Talent</title>
      </Helmet>
      <main className="main-0-2-2">
        <div className="root-0-2-254">
          <h1 className="h1-0-2-255">Forgot Password?</h1>
          <div className="caption-0-2-256">Enter Your Email</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="inputGroup-0-2-257">
              <div className="root-0-2-117 input-0-2-258">
                <label className="label-0-2-118">
                  Email{" "}
                  <span
                    className={
                      showErrorMessage
                        ? "asteriskInvalid-0-2-250"
                        : "asteriskValid-0-2-249"
                    }
                    style={{ display: "inline" }}
                  >
                    *
                  </span>
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className={`input-0-2-251 ${
                    showErrorMessage && "invalid-0-2-252"
                  }`}
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {showErrorMessage && (
                  <div className="invalidMessage-0-2-132">
                    Email does not exist
                  </div>
                )}
              </div>
              <button
                className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                onClick={() => {
                  if (email) {
                    axios
                      .post(`${env.host}/api/forgot`, {
                        email: email,
                      })
                      .then((result: any) => {
                        console.log(result);
                        if (result.data === "Email does not exist") {
                          setShowErrorMessage(true);
                        } else {
                          setShowErrorMessage(false);
                          history.push("/forgot/thanks");
                        }
                      });
                  }
                }}
              >
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
