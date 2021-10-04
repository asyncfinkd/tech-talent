import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ApplicationContext } from "../../context/Application/ApplicationContext";
import env from "../../application/environment/env.json";

const RegisterCandidateInfoPages: React.FC = () => {
  const { jwtDecode, setJwtDecode } = useContext(ApplicationContext);
  const [firstName, setFirstName] = useState<String>("");
  const [lastName, setLastName] = useState<String>("");
  const [fullName, setFullName] = useState<String | any>("");
  const [phone, setPhone] = useState<String | any>("");
  const [socialNetwork, setSocialNetwork] = useState<String | any>("");
  const history = useHistory();
  useEffect(() => {
    if (!jwtDecode.email) {
      history.push("/login");
    }
  }, []);
  useEffect(() => {
    let splitName = fullName.split(" ");
    setFirstName(splitName[0]);
    setLastName(splitName[1]);
  });
  const local = localStorage.getItem("local");
  return (
    <>
      <main className="main-0-2-2">
        <div className="root-0-2-276">
          <div className="content-0-2-277">
            <div className="marginOnMobile-0-2-134">
              <div className="root-0-2-312">
                <h1 className="h1-0-2-313">Contact Information</h1>
                <div className="caption-0-2-314">
                  You can use this data when you apply for a job
                </div>
                <div className="inputGroup-0-2-317">
                  <div className="root-0-2-250 input-0-2-318">
                    <label className="label-0-2-251">
                      First Name &amp; Last Name{" "}
                      <span
                        className="asteriskValid-0-2-252"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input-0-2-254"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="root-0-2-250 input-0-2-318">
                    <label className="label-0-2-251">
                      Phone{" "}
                      <span
                        className="asteriskValid-0-2-252"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input-0-2-254"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="root-0-2-250 input-0-2-318">
                    <label className="label-0-2-251">
                      LinkedIn/Dribbble/Behance{" "}
                      <span
                        className="asteriskValid-0-2-252"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input
                      type="text"
                      className="input-0-2-254"
                      placeholder="ex: https://www.linkedin.com/in/jane"
                      value={socialNetwork}
                      onChange={(e) => setSocialNetwork(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="placeholder-0-2-278"></div>
          <div className="footer-0-2-279">
            <div className="line-0-2-280">
              <div className="progress-0-2-281" style={{ width: "60%" }}></div>
            </div>
            <div className="marginOnMobile-0-2-134">
              <div className="left-0-2-282">
                <div className="textGroup-0-2-283">
                  <div className="h1-0-2-284">Tell us who you are</div>
                  <div className="caption-0-2-285">Contact Information</div>
                </div>
                <button
                  className="root-0-2-46 nextButton-0-2-286 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
                  type="submit"
                  onClick={() => {
                    axios
                      .post(
                        `${env.host}/api/update/user/info`,
                        {
                          firstName: firstName,
                          lastName: lastName,
                          fullName: fullName,
                          phone: phone,
                          socialNetwork: socialNetwork,
                        },
                        {
                          headers: { Authorization: `Bearer ${local}` },
                        }
                      )
                      .then((result: any) => {
                        if (result.data.success) {
                          localStorage.setItem(
                            "local",
                            result.data.access_token
                          );
                          setJwtDecode(result.data.access_token);
                          history.push("/");
                        }
                      });
                  }}
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
