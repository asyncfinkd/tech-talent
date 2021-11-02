import React from "react";
import Actions from "../../../actions/modules/index/components";

export default function IndexPageHero({
  Menu,
  Animation,
  ProfileAnimation,
  Profile,
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
      <Actions.RegisterCompanyNotification />
      <Actions.CarouselPartners />
      <Actions.Footer showFullFooter={true} />
    </>
  );
}
