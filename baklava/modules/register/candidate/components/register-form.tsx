import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Controller } from "react-hook-form";

export default function RegisterCandidateForm({ errors, control }: any) {
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
  const [isRepeatPasswordFocused, setIsRepeatPasswordFocused] =
    useState<boolean>(false);

  return (
    <>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <View>
          <Text
            style={{
              marginTop: 16,
              marginLeft: 0,
              marginBottom: 8,
              marginRight: 0,
              fontSize: 24,
              textAlign: "center",
              fontFamily: "markpro-bold",
              fontWeight: "700",
              lineHeight: 28,
            }}
          >
            Register
          </Text>
          <Text
            style={{
              opacity: 0.5,
              marginTop: 0,
              marginLeft: 0,
              marginBottom: 16,
              marginRight: 0,
              fontSize: 16,
              textAlign: "center",
              fontFamily: "markpro-light",
              lineHeight: 20,
            }}
          >
            Enter Your Credentials
          </Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
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
                render={({ field: { onChange, value } }) => (
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
                // @ts-ignore
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: `${
                        errors.email
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
                Repeat Password <Text style={{ opacity: 0.2 }}>*</Text>
              </Text>
              <Controller
                // @ts-ignore
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: `${
                        errors.email
                          ? "#d22"
                          : isRepeatPasswordFocused
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
                    onBlur={() => setIsRepeatPasswordFocused(false)}
                    onFocus={() => setIsRepeatPasswordFocused(true)}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
                name="repeatPassword"
                defaultValue=""
              />
              {errors.repeatPassword && (
                <Text
                  style={{
                    color: "#d22",
                    fontSize: 14,
                    fontFamily: "markpro-light",
                    lineHeight: 16,
                    paddingTop: 8,
                  }}
                >
                  Passwords do not match
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
