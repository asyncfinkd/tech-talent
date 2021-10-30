import React, { useRef } from "react";
import { CompaniesSVG } from "../../assets/svg/companies";
import { EducationSVG } from "../../assets/svg/education";
import { JobsSVG } from "../../assets/svg/jobs";
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
import { AboutSVG } from "../../assets/svg/about";
import Header from "../../ui/header";
import RegisterCompanyNotification from "../../ui/notification/registerCompany";
import CarouselPartners from "../../ui/carousel/partners";
import Footer from "../../ui/footer";
import { UserProfile } from "../../assets/svg/UserProfile";
import { CloseIconSVG } from "../../assets/svg/closeIcon";
import RegisterSVG from "../../assets/svg/Register";
import { LoginSVG } from "../../assets/svg/Login";

export default function IndexScreen({ navigation }: any) {
  const MenuX = useRef(new Animated.Value(-500)).current;
  const ProfileX = useRef(new Animated.Value(500)).current;

  const Menu = useBoolean();
  const Profile = useBoolean();

  const MenuData = [
    {
      title: "Jobs",
      svg: JobsSVG,
    },
    {
      title: "Companies",
      svg: CompaniesSVG,
    },
    {
      title: "Courses",
      svg: EducationSVG,
    },
    {
      title: "Education",
      svg: EducationSVG,
      route: "education",
    },
  ];

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
          <Animated.View
            // @ts-ignore
            style={{
              position: "absolute",
              // overflow: "scroll",
              backgroundColor: "white",
              top: 57,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 16,
              paddingRight: 16,
              width: "100%",
              height: "100%",
              zIndex: 9,
              transform: [
                {
                  translateX: MenuX,
                },
              ],
            }}
          >
            <View>
              {MenuData.map((item: any) => {
                return (
                  <>
                    <View
                      style={{
                        width: "100%",
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 0,
                        paddingRight: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        flexDirection: "row",
                      }}
                    >
                      {item.svg()}
                      <Text
                        style={{ marginLeft: 10, fontFamily: "markpro-bold" }}
                      >
                        {item.title}
                      </Text>
                    </View>
                  </>
                );
              })}
              <View
                style={{
                  display: "flex",
                  height: 1,
                  marginTop: 12,
                  marginBottom: 12,
                  marginLeft: 0,
                  marginRight: 0,
                  backgroundColor: "#e6e6e6",
                }}
              />
              <View>
                <View
                  style={{
                    width: "100%",
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 0,
                    paddingRight: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                  }}
                >
                  <AboutSVG />
                  <Text style={{ marginLeft: 10, fontFamily: "markpro-bold" }}>
                    About
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    height: 1,
                    marginTop: 12,
                    marginBottom: 12,
                    marginLeft: 0,
                    marginRight: 0,
                    backgroundColor: "#e6e6e6",
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "markpro-bold",
                    fontWeight: "500",
                    lineHeight: 20,
                    marginBottom: 12,
                  }}
                >
                  Language
                </Text>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <TouchableHighlight style={{ marginRight: 16 }}>
                    <Text
                      style={{
                        opacity: 0.5,
                        fontWeight: "500",
                        fontFamily: "markpro-bold",
                        lineHeight: 20,
                        fontSize: 16,
                      }}
                    >
                      English
                    </Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => navigation.push("Login")}
                    style={{ marginRight: 16 }}
                  >
                    <Text
                      style={{
                        opacity: 0.5,
                        fontWeight: "500",
                        fontFamily: "markpro-bold",
                        lineHeight: 20,
                        fontSize: 14,
                      }}
                    >
                      ქართული
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              // overflow: "scroll",
              backgroundColor: "white",
              top: 57,
              paddingTop: 12,
              paddingBottom: 12,
              paddingLeft: 16,
              paddingRight: 16,
              width: "100%",
              height: "100%",
              zIndex: 9,
              transform: [
                {
                  translateX: ProfileX,
                },
              ],
            }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  marginRight: 12,
                  width: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 18,
                  justifyContent: "center",
                  backgroundColor: "#f2f2fc",
                }}
              >
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 15,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <UserProfile />
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "markpro-bold",
                    fontSize: 18,
                    fontWeight: "500",
                    marginBottom: 2,
                    lineHeight: 20,
                  }}
                >
                  Guest
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "markpro-light",
                  }}
                >
                  Inactive
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 1,
                marginTop: 12,
                marginLeft: 0,
                marginRight: 12,
                marginBottom: 0,
                backgroundColor: "#e6e6e6",
              }}
            />
            <View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 0,
                  paddingRight: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <RegisterSVG />
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: "markpro-bold",
                    fontSize: 16,
                    paddingTop: -3,
                  }}
                >
                  Register
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 0,
                  paddingRight: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                }}
              >
                <LoginSVG />
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: "markpro-bold",
                    fontSize: 16,
                    paddingTop: -3,
                  }}
                >
                  Login
                </Text>
              </View>
            </View>
          </Animated.View>
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
