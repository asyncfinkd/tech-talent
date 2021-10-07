import React, { useEffect, useState } from "react";
import IndexPages from "./pages/index/IndexPages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPages from "./pages/login/LoginPages";
import "./styles/index/index.css";
import ForgotPages from "./pages/forgot/ForgotPages";
import ErrorPages from "./pages/Error/ErrorPages";
import jwt_decode from "jwt-decode";
import { ApplicationContext } from "./context/Application/ApplicationContext";
import RegisterPages from "./pages/register/RegisterPages";
import RegisterCandidatePages from "./pages/register/RegisterCandidatePages";
import RegisterCandidateInfoPages from "./pages/register/RegisterCandidateInfoPages";
import ForgotThanksPages from "./pages/forgot/ForgotThanksPages";
import ProfileInformationPages from "./pages/profile/ProfileInformationPages";
import ProfileSecurityPages from "./pages/profile/ProfileSecurityPages";
import PrivacyPages from "./pages/privacy/PrivacyPages";
import TermsAndConditions from "./pages/termsandconditions/TermsAndConditions";
import AboutPages from "./pages/about/AboutPages";
import CompaniesPages from "./pages/companies/CompaniesPages";
import CompaniesDetailPages from "./pages/companies/CompaniesDetailPages";
import axios from "axios";
import env from "./application/environment/env.json";
import ProfileCompaniesPages from "./pages/profile/ProfileCompaniesPages";
import EduPages from "./pages/edu/EduPages";
import EduDetailPages from "./pages/edu/EduDetailPages";

const App: React.FC = () => {
  const local = localStorage.getItem("local");
  const [jwtDecode, setJwtDecode] = useState<any>({});
  useEffect(() => {
    if (local) {
      let decoded: any = jwt_decode(local);
      setJwtDecode(decoded);
      console.log(decoded);
    }
  }, [local]);
  useEffect(() => {
    if (jwtDecode.email) {
      if (!jwtDecode._id) {
        console.log(jwtDecode);
        axios
          .post(`${env.host}/api/update/user/id`, {
            email: jwtDecode.email,
          })
          .then((result: any) => {
            localStorage.setItem("local", result.data);
            setJwtDecode(result.data);
          });
      }
    }
  });
  return (
    <>
      <ApplicationContext.Provider value={{ jwtDecode, setJwtDecode }}>
        <div className="root-0-2-1">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={IndexPages} />
              <Route path="/companies" exact component={CompaniesPages} />
              <Route path="/login" exact component={LoginPages} />
              <Route path="/register" exact component={RegisterPages} />
              <Route
                path="/register/candidate"
                exact
                component={RegisterCandidatePages}
              />
              <Route
                path="/register/candidate/info"
                exact
                component={RegisterCandidateInfoPages}
              />
              <Route path="/forgot" exact component={ForgotPages} />
              <Route
                path="/forgot/thanks"
                exact
                component={ForgotThanksPages}
              />
              <Route
                path="/profile/information"
                exact
                component={ProfileInformationPages}
              />
              <Route
                path="/profile/security"
                exact
                component={ProfileSecurityPages}
              />
              <Route
                path="/profile/companies"
                exact
                component={ProfileCompaniesPages}
              />
              <Route path="/privacy" exact component={PrivacyPages} />
              <Route path="/terms" exact component={TermsAndConditions} />
              <Route path="/about" exact component={AboutPages} />
              <Route path="/c/:id" exact component={CompaniesDetailPages} />
              <Route path="/edu" exact component={EduPages} />
              <Route path="/e/:id" exact component={EduDetailPages} />
              <Route exact component={ErrorPages} />
            </Switch>
          </BrowserRouter>
        </div>
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
