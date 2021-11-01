import React from "react";
import { Text } from "react-native";
import RegisterCandidateModules from "../../../modules/register/candidate";

export default function RegisterCandidateScreen({ navigation }: any) {
  return (
    <>
      <RegisterCandidateModules navigation={navigation} />
    </>
  );
}
