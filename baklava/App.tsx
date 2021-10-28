import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "./ui/header";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/MarkPro-Bold.woff2"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header />
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
