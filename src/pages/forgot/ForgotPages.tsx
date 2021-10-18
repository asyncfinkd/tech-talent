import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useHistory, useLocation } from "react-router-dom";
import env from "application/environment/env.json";
import { useTranslation } from "react-i18next";
import Header from "components/Header/Header";

const ForgotPages: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<String | any>("");
  const [showErrorMessage, setShowErrorMessage] = useState<Boolean>(false);
  const [spinner, setSpinner] = useState<Boolean>(false);
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>{t("FORGOTPAGESTITLE")}</title>
      </Helmet>
      <Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div className="root-0-2-254">
          <h1 className="h1-0-2-255">{t("FORGOTPASSWORD")}</h1>
          <div className="caption-0-2-256">{t("ENTERYOUREMAIL")}</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="inputGroup-0-2-257">
              <div className="root-0-2-117 input-0-2-258">
                <label className="label-0-2-118">
                  {t("EMAIL")}{" "}
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
                    {t("EMAILDOESNOTEXIST")}
                  </div>
                )}
              </div>
              {spinner ? (
                <>
                  <button className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54">
                    <svg
                      className="stroke-0-2-35 spinnerWhite-0-2-63"
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
                  </button>{" "}
                </>
              ) : (
                <>
                  <button
                    className="root-0-2-46 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                    onClick={() => {
                      if (email) {
                        setSpinner(true);
                        axios
                          .post(`${env.host}/api/forgot`, {
                            email: email,
                          })
                          .then((result: any) => {
                            setSpinner(false);
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
                    {t("SENDPASSWORDRESETEMAIL")}
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ForgotPages;
