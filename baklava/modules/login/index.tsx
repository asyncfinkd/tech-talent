import Actions from "../../actions/modules/login";
import React from "react";

export default function LoginPageModule({ navigation }: any) {
  const MenuX = Actions.useRef(new Actions.Animated.Value(-500)).current;
  const ProfileX = Actions.useRef(new Actions.Animated.Value(500)).current;
  const [isEmailFocused, setIsEmailFocused] = Actions.useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] =
    Actions.useState<boolean>(false);
  const [invalidUser, setInvalidUser] = Actions.useState<boolean>(false);
  const Menu = Actions.useBoolean();
  const Profile = Actions.useBoolean();
  const { access_token, setAccess_Token } = Actions.useContext(
    Actions.ApplicationContext
  );
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = Actions.useForm();

  const _storeData = async (value: any) => {
    try {
      await Actions.AsyncStorage.setItem("token", value);
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
      <Actions.SafeAreaView style={{ backgroundColor: "white" }}>
        <Actions.ScrollView>
          <Actions.StatusBar backgroundColor="white" />
          <Actions.LeftSidebar MenuX={MenuX} />
          <Actions.RightSidebar ProfileX={ProfileX} navigation={navigation} />
          <Actions.Header
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
          <Actions.View style={{ marginLeft: 15, marginRight: 15 }}>
            <Actions.View style={{ marginBottom: 20 }}>
              <Actions.Text
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
              </Actions.Text>
              <Actions.Text
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
              </Actions.Text>
              <Actions.View>
                <Actions.View>
                  <Actions.View style={{ width: "100%", marginBottom: 20 }}>
                    <Actions.Text
                      style={{
                        fontSize: 16,
                        fontFamily: "markpro-bold",
                        fontWeight: "700",
                        lineHeight: 20,
                        marginBottom: 20,
                      }}
                    >
                      Email{" "}
                      <Actions.Text style={{ opacity: 0.2 }}>*</Actions.Text>
                    </Actions.Text>
                    <Actions.Controller
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
                        <Actions.TextInput
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
                      <Actions.Text
                        style={{
                          color: "#d22",
                          fontSize: 14,
                          fontFamily: "markpro-light",
                          lineHeight: 16,
                          paddingTop: 8,
                        }}
                      >
                        Valid email is required
                      </Actions.Text>
                    )}
                  </Actions.View>
                  <Actions.View style={{ width: "100%", marginBottom: 20 }}>
                    <Actions.Text
                      style={{
                        fontSize: 16,
                        fontFamily: "markpro-bold",
                        fontWeight: "700",
                        lineHeight: 20,
                        marginBottom: 20,
                      }}
                    >
                      Password{" "}
                      <Actions.Text style={{ opacity: 0.2 }}>*</Actions.Text>
                    </Actions.Text>
                    <Actions.Controller
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <Actions.TextInput
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
                      <Actions.Text
                        style={{
                          color: "#d22",
                          fontSize: 14,
                          fontFamily: "markpro-light",
                          lineHeight: 16,
                          paddingTop: 8,
                        }}
                      >
                        Password is required
                      </Actions.Text>
                    )}
                  </Actions.View>
                </Actions.View>
                {invalidUser && (
                  <Actions.Text
                    style={{
                      color: "#d22",
                      fontSize: 14,
                      fontFamily: "markpro-light",
                      lineHeight: 16,
                      paddingBottom: 8,
                    }}
                  >
                    Incorrect email or password
                  </Actions.Text>
                )}
                <Actions.View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <Actions.Text
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
                  </Actions.Text>
                  <Actions.TouchableHighlight
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
                            let decoded: any = Actions.jwt_decode(
                              result.access_token
                            );
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
                    <Actions.Text
                      style={{
                        textAlign: "center",
                        fontFamily: "markpro-bold",
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      Login
                    </Actions.Text>
                  </Actions.TouchableHighlight>
                </Actions.View>
              </Actions.View>
            </Actions.View>
          </Actions.View>
          <Actions.Footer showFullFooter={false} />
        </Actions.ScrollView>
      </Actions.SafeAreaView>
    </>
  );
}
