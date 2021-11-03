import Actions from "../../../../actions/screens/register/candidate/info";
import React from "react";

export default function RegisterCandidateInfoScreen({ navigation }: any) {
  return (
    <>
      <Actions.View>
        <Actions.RegisterCandidateInfoModules navigation={navigation} />
      </Actions.View>
    </>
  );
}
