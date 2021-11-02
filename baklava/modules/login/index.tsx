import React, { useContext, useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  ScrollView,
  Text,
  View,
  Animated,
  TextInput,
  TouchableHighlight,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../ui/header";
import LeftSidebar from "../../ui/sidebar/left";
import RightSidebar from "../../ui/sidebar/right";
import jwt_decode from "jwt-decode";
import { ApplicationContext } from "../../context/application";
import useBoolean from "../../shared-hooks/use-boolean";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../../ui/footer";

export default function LoginPageModule({ navigation }: any) {
  const MenuX = useRef(new Animated.Value(-500)).current;
  const ProfileX = useRef(new Animated.Value(500)).current;
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [invalidUser, setInvalidUser] = useState<boolean>(false);
  const Menu = useBoolean();
  const Profile = useBoolean();
  const { access_token, setAccess_Token } = useContext(ApplicationContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (error) {
      // Error saving data
    }
  };

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
          <LeftSidebar MenuX={MenuX} />
          <RightSidebar ProfileX={ProfileX} navigation={navigation} />
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
            navigation={navigation}
            Menu={Menu}
            ProfileFunction={() => {
              if (Profile.value) {
                ProfileAnimation(500);
                Profile.toggle();
              } else {
                ProfileAnimation(0);
                Profile.toggle();
              }
            }}
            Profile={Profile}
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
                    <Controller
                      // @ts-ignore
                      control={control}
                      rules={{
                        required: true,
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Valid email is required",
                        },
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                          style={{
                            width: "100%",
                            borderWidth: 2,
                            borderColor: `${
                              errors.email
                                ? "#d22"
                                : isEmailFocused
                                ? "#7b7ce6"
                                : "transparent"
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
                          value={value}
                          onChangeText={onChange}
                        />
                      )}
                      name="email"
                      defaultValue=""
                    />
                    {errors.email && (
                      <Text
                        style={{
                          color: "#d22",
                          fontSize: 14,
                          fontFamily: "markpro-light",
                          lineHeight: 16,
                          paddingTop: 8,
                        }}
                      >
                        Valid email is required
                      </Text>
                    )}
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
                    <Controller
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <TextInput
                          style={{
                            width: "100%",
                            borderWidth: 2,
                            borderColor: `${
                              errors.password
                                ? "#d22"
                                : isPasswordFocused
                                ? "#7b7ce6"
                                : "transparent"
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
                          value={value}
                          secureTextEntry={true}
                          onChangeText={onChange}
                        />
                      )}
                      name="password"
                      defaultValue=""
                    />
                    {errors.password && (
                      <Text
                        style={{
                          color: "#d22",
                          fontSize: 14,
                          fontFamily: "markpro-light",
                          lineHeight: 16,
                          paddingTop: 8,
                        }}
                      >
                        Password is required
                      </Text>
                    )}
                  </View>
                </View>
                {invalidUser && (
                  <Text
                    style={{
                      color: "#d22",
                      fontSize: 14,
                      fontFamily: "markpro-light",
                      lineHeight: 16,
                      paddingBottom: 8,
                    }}
                  >
                    Incorrect email or password
                  </Text>
                )}
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
                    onPress={handleSubmit((data: any) => {
                      const method = fetch(
                        `https://tech-talent-api.herokuapp.com/api/login`,
                        {
                          method: "POST",
                          headers: {
                            "Content-type": "application/json",
                          },
                          body: JSON.stringify({
                            email: data.email,
                            password: data.password,
                            forUser: true,
                          }),
                        }
                      )
                        .then((res) => res.json())
                        .then((result) => {
                          if (result.success != true) {
                            setInvalidUser(true);
                          } else {
                            let decoded: any = jwt_decode(result.access_token);
                            _storeData(JSON.stringify(decoded));
                            setAccess_Token(JSON.stringify(decoded));
                            setInvalidUser(false);
                            navigation.push("Home");
                          }
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    })}
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
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
