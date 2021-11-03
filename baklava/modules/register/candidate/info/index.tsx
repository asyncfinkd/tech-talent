import Actions from "../../../../actions/modules/register/candidate/info";
import { Animated } from "react-native";
import React from "react";

export default function RegisterCandidateInfoModules({ navigation }: any) {
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
      <Actions.SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <Actions.ScrollView>
          <Actions.StatusBar backgroundColor="white" />
          <Actions.LeftSidebar MenuX={MenuX} />
          <Actions.RightSidebar ProfileX={ProfileX} navigation={navigation} />
          <Actions.RegisterHero
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
