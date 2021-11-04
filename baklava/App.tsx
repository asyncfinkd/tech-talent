import Actions from "./actions/index";
import "react-native-gesture-handler";
import React from "react";
import * as Font from "expo-font";
import { TokenProps } from "./types/app/token";

const getFonts = () =>
  Font.loadAsync({
    "markpro-bold": require("./assets/fonts/markpro-bold-webfont.ttf"),
    // helvetica: require("./assets/fonts/Helvetica.woff2"),
    "markpro-light": require("./assets/fonts/MarkPro-Light.ttf"),
    // markpro: require("./assets/fonts/MarkPro.woff2"),
    // "markpro-medium": require("./assets/fonts/MarkPro-Medium.woff2"),
  });

const Stack = Actions.createStackNavigator();

export default function App() {
  const _retrieveData = async () => {
    try {
      const value: any = await Actions.AsyncStorage.getItem("token");
      const parsedToken: any = JSON.parse(value).decoded;
      if (access_token.email == "") {
        if (value != null) {
          // We have data!!
          setAccess_Token(parsedToken);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [fontsLoaded, setFontsLoaded] = Actions.useState<boolean>(false);
  const [access_token, setAccess_Token] = Actions.useState<TokenProps>(
    Actions.APP__TOKEN__MOCKS__()
  );
  Actions.useEffect(() => {
    _retrieveData();
  });
  if (fontsLoaded) {
    return (
      <>
        <Actions.ApplicationContext.Provider
          value={{ access_token, setAccess_Token }}
        >
          <Actions.NavigationContainer>
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
                component={Actions.IndexScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Login"
                component={Actions.LoginScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Register"
                component={Actions.RegisterScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="RegisterCandidate"
                component={Actions.RegisterCandidateScreen}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="RegisterCandidateInfo"
                component={Actions.RegisterCandidateInfoScreen}
              />
            </Stack.Navigator>
          </Actions.NavigationContainer>
        </Actions.ApplicationContext.Provider>
      </>
    );
  } else {
    return (
      <Actions.AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
