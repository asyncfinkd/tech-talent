import React from "react";
import { View } from "react-native";
import RegisterCandidateModules from "../../../modules/register/candidate";
import RegisterFooter from "../../../ui/footer/register";

export default function RegisterCandidateScreen({ navigation }: any) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <RegisterCandidateModules navigation={navigation} />
        <RegisterFooter secondStep={true} />
      </View>
    </>
  );
}
