import React, { useRef } from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Animated,
} from "react-native";
import useBoolean from "../../../shared-hooks/use-boolean";
import LeftSidebar from "../../../ui/sidebar/left";
import RightSidebar from "../../../ui/sidebar/right";
import RegisterHero from "./components/register-hero";

export default function RegisterCandidateModules({
  navigation,
  errors,
  control,
  watch,
  getValues,
  emailIsAlreadyRegistered,
}: any) {
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
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <StatusBar backgroundColor="white" />
          <LeftSidebar MenuX={MenuX} />
          <RightSidebar ProfileX={ProfileX} navigation={navigation} />
          <RegisterHero
            Menu={Menu}
            Animation={Animation}
            ProfileAnimation={ProfileAnimation}
            Profile={Profile}
            navigation={navigation}
            errors={errors}
            control={control}
            watch={watch}
            getValues={getValues}
            emailIsAlreadyRegistered={emailIsAlreadyRegistered}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
