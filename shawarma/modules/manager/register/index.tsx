import React from "react";
import Actions from "actions/manager/register";

export default function ManagerRegisterModules() {
  return (
    <>
      <Actions.Header ShowShadow={true} />
      <main className="main-0-2-2">
        <div>
          <div className="content-0-2-101">
            <div className="marginOnMobile-0-2-111">
              <div className="root-0-2-113">
                <Actions.RegisterHeader />
                <Actions.RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Actions.Footer />
    </>
  );
}
