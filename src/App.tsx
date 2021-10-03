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

const App: React.FC = () => {
  const local = localStorage.getItem("local");
  const [jwtDecode, setJwtDecode] = useState<any>({});
  useEffect(() => {
    if (local) {
      let decoded: any = jwt_decode(local);
      setJwtDecode(decoded);
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
              <Route path="/forgot" exact component={ForgotPages} />
              <Route exact component={ErrorPages} />
            </Switch>
          </BrowserRouter>
        </div>
      </ApplicationContext.Provider>
    </>
  );
};

export default App;
