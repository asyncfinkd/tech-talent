import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationContext } from "../../context/Application/ApplicationContext";

const RegisterCandidateInfoPages: React.FC = () => {
  const { jwtDecode } = useContext(ApplicationContext);
  const history = useHistory();
  useEffect(() => {
    if (!jwtDecode.email) {
      history.push("/login");
    }
  }, []);
  return (
    <>
      <main className="main-0-2-2">
        <div className="root-0-2-100">
          <div className="content-0-2-101">
            <div className="marginOnMobile-0-2-111">
              <div className="root-0-2-171">
                <h1 className="h1-0-2-172">Contact Information</h1>
                <div className="caption-0-2-173">
                  You can use this data when you apply for a job
                </div>
                <div className="inputGroup-0-2-176">
                  <div className="root-0-2-161 input-0-2-177">
                    <label className="label-0-2-162">
                      First Name &amp; Last Name{" "}
                      <span
                        className="asteriskValid-0-2-163"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input type="text" className="input-0-2-165" />
                  </div>
                  <div className="root-0-2-161 input-0-2-177">
                    <label className="label-0-2-162">
                      Phone{" "}
                      <span
                        className="asteriskValid-0-2-163"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input type="text" className="input-0-2-165" />
                  </div>
                  <div className="root-0-2-161 input-0-2-177">
                    <label className="label-0-2-162">
                      LinkedIn/Dribbble/Behance{" "}
                      <span
                        className="asteriskValid-0-2-163"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input-0-2-165"
                      placeholder="ex: https://www.linkedin.com/in/jane"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="placeholder-0-2-102"></div>
          <div className="footer-0-2-103">
            <div className="line-0-2-104">
              <div className="progress-0-2-105" style={{ width: "60%" }}></div>
            </div>
            <div className="marginOnMobile-0-2-111">
              <div className="left-0-2-106">
                <div className="textGroup-0-2-107">
                  <div className="h1-0-2-108">Tell us who you are</div>
                  <div className="caption-0-2-109">Contact Information</div>
                </div>
                <button
                  className="root-0-2-46 nextButton-0-2-110 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterCandidateInfoPages;
