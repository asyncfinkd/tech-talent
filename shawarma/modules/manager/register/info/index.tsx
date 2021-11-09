import Actions from "actions/manager/info";
import React from "react";
import RegisterForm from "./components/register-form";
import RegisterHeader from "./components/register-header";

export default function ManagerRegisterInfoModules() {
  return (
    <>
      <Actions.Header />
      <main className="main-0-2-2">
        <div>
          <div className="content-0-2-101">
            <div className="marginOnMobile-0-2-111">
              <div className="root-0-2-113">
                <RegisterHeader />
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Actions.Footer />
    </>
  );
}
