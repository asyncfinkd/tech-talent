import React, { useRef } from "react";
import { Text, View, SafeAreaView, ScrollView, Animated } from "react-native";
import Header from "./ui/header";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import RegisterCompanyNotification from "./ui/notification/registerCompany";
import CarouselPartners from "./ui/carousel/partners";
import Footer from "./ui/footer";
import useBoolean from "./shared-hooks/use-boolean";
import { JobsSVG } from "./assets/svg/jobs";
import { CompaniesSVG } from "./assets/svg/companies";
import { CoursesSVG } from "./assets/svg/courses";
import { EducationSVG } from "./assets/svg/education";
import { AboutSVG } from "./assets/svg/about";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/markpro-bold-webfont.ttf"),
    // helvetica: require("./assets/fonts/Helvetica.woff2"),
    "markpro-light": require("./assets/fonts/MarkPro-Light.ttf"),
    // markpro: require("./assets/fonts/MarkPro.woff2"),
    // "markpro-medium": require("./assets/fonts/MarkPro-Medium.woff2"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const MenuX = useRef(new Animated.Value(-500)).current;
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
    },
  ];

  const Animation = (value: number) => {
    // @ts-ignore
    Animated.timing(MenuX, {
      toValue: value,
      duration: 500,
    }).start();
  };

  if (fontsLoaded) {
    return (
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
          />
          <RegisterCompanyNotification />
          <CarouselPartners />
          <Footer />
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
