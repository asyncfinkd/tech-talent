import React, { useRef } from "react";
import useBoolean from "../../shared-hooks/use-boolean";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import Header from "../../ui/header";
import RegisterCompanyNotification from "../../ui/notification/registerCompany";
import CarouselPartners from "../../ui/carousel/partners";
import Footer from "../../ui/footer";
import { UserProfile } from "../../assets/svg/UserProfile";
import RegisterSVG from "../../assets/svg/Register";
import { LoginSVG } from "../../assets/svg/Login";
import LeftSidebar from "../../ui/sidebar/left";
import RightSidebar from "../../ui/sidebar/right";

export default function IndexScreen({ navigation }: any) {
  const MenuX = useRef(new Animated.Value(-500)).current;
  const ProfileX = useRef(new Animated.Value(500)).current;

  const Menu = useBoolean();
  const Profile = useBoolean();

  const Animation = (value: number) => {
    // @ts-ignore
    Animated.timing(MenuX, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const ProfileAnimation = (value: number) => {
    // @ts-ignore
    Animated.timing(ProfileX, {
      toValue: value,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <ScrollView>
          <StatusBar backgroundColor="white" />
          <LeftSidebar MenuX={MenuX} />
          <RightSidebar ProfileX={ProfileX} navigation={navigation} />
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
