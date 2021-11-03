import Actions from "../../../../actions/modules/register/candidate/info";
import React from "react";
import LeftSidebar from "../../../../ui/sidebar/left";
import RightSidebar from "../../../../ui/sidebar/right";

export default function RegisterCandidateInfoModules({ navigation }: any) {
  const MenuX = Actions.useRef(new Actions.Animated.Value(-500)).current;
  const ProfileX = Actions.useRef(new Actions.Animated.Value(500)).current;

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
          <LeftSidebar MenuX={MenuX} />
          <RightSidebar ProfileX={ProfileX} navigation={navigation} />
        </Actions.ScrollView>
      </Actions.SafeAreaView>
    </>
  );
}
