import React from "react";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/HomeStack";

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

  if (fontsLoaded) {
    return (
      <>
        <Navigator />
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
