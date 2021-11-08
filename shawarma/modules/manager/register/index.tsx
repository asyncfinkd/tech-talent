import React from "react";
import Actions from "actions/manager/register";

export default function ManagerRegisterModules() {
  return (
    <>
      <Actions.Header ShowShadow={true} />
      <Actions.Footer />
    </>
  );
}
