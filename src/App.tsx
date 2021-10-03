import React from "react";
import IndexPages from "./pages/index/IndexPages";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <div className="root-0-2-1">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={IndexPages} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
