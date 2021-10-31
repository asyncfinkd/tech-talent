import React from "react";
import Footer from "../../../ui/footer";
import Header from "../../../ui/header";

export default function RegisterHero({
  Menu,
  Animation,
  ProfileAnimation,
  Profile,
  navigation,
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
      <Footer />
    </>
  );
}
