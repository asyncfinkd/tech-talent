import React, { useEffect, useState } from "react";
import IndexPages from "./pages/index/IndexPages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
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
  return (
    <>
      <ApplicationContext.Provider value={{ jwtDecode, setJwtDecode }}>
        <div className="root-0-2-1">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/" exact component={IndexPages} />
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
              <Route exact component={ErrorPages} />
            </Switch>
          </BrowserRouter>
        </div>
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
