import React, { useRef } from "react";
import useBoolean from "../../shared-hooks/use-boolean";
import { SafeAreaView, ScrollView, Animated, StatusBar } from "react-native";
import LeftSidebar from "../../ui/sidebar/left";
import RightSidebar from "../../ui/sidebar/right";
import IndexPageHero from "./components/index-hero";

export default function IndexPageModule({ navigation }: any) {
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
          <IndexPageHero
            Menu={Menu}
            Animation={Animation}
            ProfileAnimation={ProfileAnimation}
            Profile={Profile}
            navigation={navigation}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
