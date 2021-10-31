import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import LoginScreen from "./screens/login";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApplicationContext } from "./context/application";
import { TokenProps } from "./types/app/token";
import { APP__TOKEN__MOCKS__ } from "./mocks/_app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./screens/index";
import RegisterScreen from "./screens/register";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/markpro-bold-webfont.ttf"),
    // helvetica: require("./assets/fonts/Helvetica.woff2"),
    "markpro-light": require("./assets/fonts/MarkPro-Light.ttf"),
    // markpro: require("./assets/fonts/MarkPro.woff2"),
    // "markpro-medium": require("./assets/fonts/MarkPro-Medium.woff2"),
  });

const Stack = createStackNavigator();

export default function App() {
  const _retrieveData = async () => {
    try {
      const value: any = await AsyncStorage.getItem("token");
      if (access_token.fullName == "") {
        if (value !== null) {
          // We have data!!
          setAccess_Token(value);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [fontsLoaded, setFontsLoaded] = useState<boolean>(false);
  const [access_token, setAccess_Token] = useState<TokenProps>(
    APP__TOKEN__MOCKS__()
  );
  useEffect(() => {
    _retrieveData();
  });
  if (fontsLoaded) {
    return (
      <>
        <ApplicationContext.Provider value={{ access_token, setAccess_Token }}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerMode: "screen",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "white" },
              }}
            >
              <Stack.Screen
                name="Home"
                component={IndexScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Login"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Register"
                component={RegisterScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
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
