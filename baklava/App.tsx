import React from "react";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import IndexScreen from "./screens/index";
import LoginScreen from "./screens/login";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApplicationContext } from "./context/application";
import { TokenProps } from "./types/app/token";
import { APP__TOKEN__MOCKS__ } from "./mocks/_app";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/markpro-bold-webfont.ttf"),
    // helvetica: require("./assets/fonts/Helvetica.woff2"),
    "markpro-light": require("./assets/fonts/MarkPro-Light.ttf"),
    // markpro: require("./assets/fonts/MarkPro.woff2"),
    // "markpro-medium": require("./assets/fonts/MarkPro-Medium.woff2"),
  });

export default function App() {
  // const _retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("token");
  //     if (access_token.fullName == "") {
  //       if (value !== null) {
  //         // We have data!!
  //         let decoded: any = jwt_decode(value);
  //         setAccess_Token(decoded);
  //       }
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [access_token, setAccess_Token] = useState<TokenProps>(
    APP__TOKEN__MOCKS__()
  );
  if (fontsLoaded) {
    return (
      <>
        <ApplicationContext.Provider value={{ access_token, setAccess_Token }}>
          {/* <IndexScreen /> */}
          <LoginScreen />
        </ApplicationContext.Provider>
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
