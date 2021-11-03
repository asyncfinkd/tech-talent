import Actions from "../../actions/screens/register";
import React from "react";

export default function RegisterScreen({ navigation }: any) {
  return (
    <>
      <Actions.View style={{ flex: 1 }}>
        <Actions.RegisterPageModules navigation={navigation} />
        <Actions.RegisterFooter firstStep={true} />
      </Actions.View>
    </>
  );
}
