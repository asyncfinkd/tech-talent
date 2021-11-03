import Actions from "../../../../../actions/modules/register/candidate/info/components/register-hero-actions";
import React from "react";

export default function RegisterHero({
  Menu,
  Animation,
  Profile,
  ProfileAnimation,
  navigation,
}: any) {
  return (
    <>
      <Actions.Header
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
      <Actions.RegisterCandidateInfoForm />
    </>
  );
}
