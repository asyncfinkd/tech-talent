import type { NextPage } from "next";
import Head from "next/head";
import RegisterFooter from "ui/footer/register";
import Header from "ui/header";

const RegisterCandidateInfoPages: NextPage = () => {
  return (
    <>
      <Head>
        <title>Register | Tech Talent</title>
      </Head>
      <Header ShowShadow={true} />
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
                      First Name & Last Name{" "}
                      <span
                        className="asteriskValid-0-2-252"
                        style={{ display: "none" }}
                      >
                        *
                      </span>
                    </label>
                    <input type="text" className="input-0-2-254" />
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
                    <input type="text" className="input-0-2-254" />
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
                    <input type="text" className="input-0-2-254" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RegisterFooter candidateinfo={true} />
        </div>
      </main>
    </>
  );
};

export default RegisterCandidateInfoPages;
