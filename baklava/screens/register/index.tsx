import React from "react";
import { Text, View } from "react-native";
import RegisterPageModules from "../../modules/register";
import RegisterFooter from "../../ui/footer/register";

export default function RegisterScreen({ navigation }: any) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <RegisterPageModules navigation={navigation} />
        <RegisterFooter firstStep={true} />
      </View>
    </>
  );
}
