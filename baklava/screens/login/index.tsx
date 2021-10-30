import React, { useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Animated,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../ui/header";
import useBoolean from "../../shared-hooks/use-boolean";
import { JobsSVG } from "../../assets/svg/jobs";
import { CompaniesSVG } from "../../assets/svg/companies";
import { EducationSVG } from "../../assets/svg/education";
import { AboutSVG } from "../../assets/svg/about";
import Footer from "../../ui/footer";
import { useState } from "react";

export default function LoginScreen() {
  const MenuX = useRef(new Animated.Value(-10000000)).current;
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const Menu = useBoolean();

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

  return (
    <>
      <SafeAreaView>
        <ScrollView>
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
                  <TouchableHighlight style={{ marginRight: 16 }}>
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
            Menu={Menu}
          />
          <View style={{ marginLeft: 15, marginRight: 15 }}>
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  marginTop: 16,
                  marginLeft: 0,
                  marginBottom: 8,
                  marginRight: 0,
                  textAlign: "center",
                  fontFamily: "markpro-bold",
                  fontSize: 24,
                  fontWeight: "700",
                  lineHeight: 28,
                }}
              >
                Login
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  marginLeft: 0,
                  marginBottom: 16,
                  marginRight: 0,
                  opacity: 0.5,
                  fontSize: 16,
                  fontFamily: "markpro-light",
                  textAlign: "center",
                  fontWeight: "400",
                  lineHeight: 20,
                }}
              >
                Welcome Back
              </Text>
              <View>
                <View>
                  <View style={{ width: "100%", marginBottom: 20 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "markpro-bold",
                        fontWeight: "700",
                        lineHeight: 20,
                        marginBottom: 20,
                      }}
                    >
                      Email <Text style={{ opacity: 0.2 }}>*</Text>
                    </Text>
                    <TextInput
                      style={{
                        width: "100%",
                        borderWidth: 2,
                        borderColor: `${
                          isEmailFocused ? "#7b7ce6" : "transparent"
                        }`,
                        paddingTop: 22,
                        paddingLeft: 24,
                        paddingBottom: 22,
                        paddingRight: 24,
                        fontSize: 16,
                        fontFamily: "markpro-light",
                        lineHeight: 20,
                        borderRadius: 15,
                        backgroundColor: "#eff3ff",
                      }}
                      onBlur={() => setIsEmailFocused(false)}
                      onFocus={() => setIsEmailFocused(true)}
                    />
                  </View>
                  <View style={{ width: "100%", marginBottom: 20 }}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "markpro-bold",
                        fontWeight: "700",
                        lineHeight: 20,
                        marginBottom: 20,
                      }}
                    >
                      Password <Text style={{ opacity: 0.2 }}>*</Text>
                    </Text>
                    <TextInput
                      style={{
                        width: "100%",
                        borderWidth: 2,
                        borderColor: `${
                          isPasswordFocused ? "#7b7ce6" : "transparent"
                        }`,
                        paddingTop: 22,
                        paddingLeft: 24,
                        paddingBottom: 22,
                        paddingRight: 24,
                        fontSize: 16,
                        fontFamily: "markpro-light",
                        lineHeight: 20,
                        borderRadius: 15,
                        backgroundColor: "#eff3ff",
                      }}
                      onBlur={() => setIsPasswordFocused(false)}
                      onFocus={() => setIsPasswordFocused(true)}
                    />
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      color: "#696974",
                      opacity: 0.8,
                      fontSize: 14,
                      marginTop: 8,
                      lineHeight: 16,
                      fontFamily: "markpro-light",
                    }}
                  >
                    Forgot Password?
                  </Text>
                  <TouchableHighlight
                    style={{
                      backgroundColor: "#7b7ce6",
                      width: 120,
                      paddingTop: 14,
                      paddingLeft: 28,
                      paddingRight: 28,
                      paddingBottom: 14,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        textAlign: "center",
                        fontFamily: "markpro-bold",
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      Login
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
          <Footer showFullFooter={false} />
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
