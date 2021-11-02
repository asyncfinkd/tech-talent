import React from "react";
import { Text } from "react-native";
import Header from "../../../../ui/header";
import RegisterCandidateForm from "./register-form";

export default function RegisterHero({
  Menu,
  Animation,
  Profile,
  ProfileAnimation,
  navigation,
  errors,
  control,
  watch,
  getValues,
  emailIsAlreadyRegistered,
}: any) {
  return (
    <>
      <Header
        MenuFunction={() => {
          if (Menu.value) {
            Animation(-500);
            Menu.toggle();
          } else {
            Animation(0);
            Menu.toggle();
          }
        }}
        ProfileFunction={() => {
          if (Profile.value) {
            ProfileAnimation(500);
            Profile.toggle();
          } else {
            ProfileAnimation(0);
            Profile.toggle();
          }
        }}
        navigation={navigation}
        Menu={Menu}
        Profile={Profile}
      />
      <RegisterCandidateForm
        errors={errors}
        control={control}
        watch={watch}
        getValues={getValues}
        emailIsAlreadyRegistered={emailIsAlreadyRegistered}
      />
    </>
  );
}
