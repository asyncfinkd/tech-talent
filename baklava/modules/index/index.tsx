import Actions from "../../actions/modules/index";
import { Animated } from "react-native";
import React from "react";

export default function IndexPageModule({ navigation }: any) {
  const MenuX = Actions.useRef(new Animated.Value(-500)).current;
  const ProfileX = Actions.useRef(new Animated.Value(500)).current;

  const Menu = Actions.useBoolean();
  const Profile = Actions.useBoolean();

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
      <Actions.SafeAreaView style={{ backgroundColor: "white" }}>
        <Actions.ScrollView>
          <Actions.StatusBar backgroundColor="white" />
          <Actions.LeftSidebar MenuX={MenuX} />
          <Actions.RightSidebar ProfileX={ProfileX} navigation={navigation} />
          <Actions.IndexPageHero
            Menu={Menu}
            Animation={Animation}
            ProfileAnimation={ProfileAnimation}
            Profile={Profile}
            navigation={navigation}
          />
        </Actions.ScrollView>
      </Actions.SafeAreaView>
    </>
  );
}
