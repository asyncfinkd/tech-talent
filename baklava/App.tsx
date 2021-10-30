import React from "react";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import IndexScreen from "./screens/index";
import LoginScreen from "./screens/login";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/markpro-bold-webfont.ttf"),
    // helvetica: require("./assets/fonts/Helvetica.woff2"),
    "markpro-light": require("./assets/fonts/MarkPro-Light.ttf"),
    // markpro: require("./assets/fonts/MarkPro.woff2"),
    // "markpro-medium": require("./assets/fonts/MarkPro-Medium.woff2"),
  });

export default function App() {
  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("TASKS");
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  useEffect(() => {
    _retrieveData();
  });
  if (fontsLoaded) {
    return (
      <>
        {/* <IndexScreen /> */}
        <LoginScreen />
      </>
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
