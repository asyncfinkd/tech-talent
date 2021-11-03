import Actions from "../../../../../actions/modules/register/candidate/info/components/register-form-actions";
import React from "react";

export default function RegisterCandidateInfoForm({
  errors,
  control,
  watch,
  getValues,
}: any) {
  const [fullNameFocused, setFullNameFocused] =
    Actions.useState<boolean>(false);
  const [phoneFocused, setPhoneFocused] = Actions.useState<boolean>(false);
  const [socialNetworkFocused, setSocialNetworkFocused] =
    Actions.useState<boolean>(false);

  return (
    <>
      <Actions.View style={{ marginLeft: 15, marginRight: 15 }}>
        <Actions.View>
          <Actions.Text
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
            Contact Information
          </Actions.Text>
          <Actions.Text
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
            You can use this data when you apply for a job
          </Actions.Text>
          <Actions.View style={{ display: "flex", flexDirection: "column" }}>
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
                Email <Actions.Text style={{ opacity: 0.2 }}>*</Actions.Text>
              </Actions.Text>
              <Actions.Controller
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
                  <Actions.TextInput
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: `${
                        errors.email
                          ? "#d22"
                          : fullNameFocused
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
                    onBlur={() => setFullNameFocused(false)}
                    onFocus={() => setFullNameFocused(true)}
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
                Password <Actions.Text style={{ opacity: 0.2 }}>*</Actions.Text>
              </Actions.Text>
              <Actions.Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, value } }) => (
                  <Actions.TextInput
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: `${
                        errors.email
                          ? "#d22"
                          : phoneFocused
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
                    onBlur={() => setPhoneFocused(false)}
                    onFocus={() => setPhoneFocused(true)}
                    value={value}
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
                Repeat Password{" "}
                <Actions.Text style={{ opacity: 0.2 }}>*</Actions.Text>
              </Actions.Text>
              <Actions.Controller
                control={control}
                rules={{
                  required: true,
                  validate: () => {
                    return getValues("repeatPassword") == watch("password");
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Actions.TextInput
                    style={{
                      width: "100%",
                      borderWidth: 2,
                      borderColor: `${
                        errors.email
                          ? "#d22"
                          : socialNetworkFocused
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
                    onBlur={() => setSocialNetworkFocused(false)}
                    onFocus={() => setSocialNetworkFocused(true)}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
                name="repeatPassword"
                defaultValue=""
              />
              {errors.repeatPassword && (
                <Actions.Text
                  style={{
                    color: "#d22",
                    fontSize: 14,
                    fontFamily: "markpro-light",
                    lineHeight: 16,
                    paddingTop: 8,
                  }}
                >
                  Passwords do not match
                </Actions.Text>
              )}
            </Actions.View>
          </Actions.View>
        </Actions.View>
      </Actions.View>
    </>
  );
}
