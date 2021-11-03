import Actions from "../../../../actions/screens/register/candidate/info";
import React from "react";

export default function RegisterCandidateInfoScreen({ navigation }: any) {
  return (
    <>
      <Actions.View style={{ flex: 1 }}>
        <Actions.RegisterCandidateInfoModules navigation={navigation} />
        <Actions.RegisterFooter
          thirdStep={true}
          thirdStepOnPress={() => {
            console.log("1");
          }}
        />
      </Actions.View>
    </>
  );
}
