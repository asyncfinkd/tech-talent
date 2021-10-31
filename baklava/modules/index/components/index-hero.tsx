import React from "react";
import CarouselPartners from "../../../ui/carousel/partners";
import Footer from "../../../ui/footer";
import Header from "../../../ui/header";
import RegisterCompanyNotification from "../../../ui/notification/registerCompany";

export default function IndexPageHero({
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
      <RegisterCompanyNotification />
      <CarouselPartners />
      <Footer showFullFooter={true} />
    </>
  );
}
