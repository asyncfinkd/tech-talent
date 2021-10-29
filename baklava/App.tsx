import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "./ui/header";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import RegisterCompanyNotification from "./ui/notification/registerCompany";
import CarouselPartners from "./ui/carousel/partners";
import Footer from "./ui/footer";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/markpro-bold-webfont.ttf"),
    // helvetica: require("./assets/fonts/Helvetica.woff2"),
    "markpro-light": require("./assets/fonts/MarkPro-Light.ttf"),
    // markpro: require("./assets/fonts/MarkPro.woff2"),
    // "markpro-medium": require("./assets/fonts/MarkPro-Medium.woff2"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header />
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
