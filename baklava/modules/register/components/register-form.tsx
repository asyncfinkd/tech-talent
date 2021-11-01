import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import CompanyIcon from "../../../assets/svg/Company";
import OtherSVG from "../../../assets/svg/Other";
import RegisterIcon from "../../../assets/svg/RegisterIcon";
import { interest } from "../../../fixtures/register";

export default function RegisterForm({ navigation }: any) {
  const renderSVGs = ({ item }: any) => {
    if (item.text === "Other") {
      return <OtherSVG color="rgb(255, 94, 54)" />;
    } else if (item.text === "Company") {
      return <CompanyIcon color="rgb(117,41,251)" />;
    } else {
      return <RegisterIcon color={item.fill} />;
    }
  };
  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                marginTop: 16,
                marginLeft: 0,
                marginBottom: 8,
                marginRight: 0,
                textAlign: "center",
                fontSize: 24,
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
              Choose Link field of interest
            </Text>
            {interest.map((item) => {
              return (
                <>
                  <TouchableHighlight
                    onPress={() => {
                      navigation.push("RegisterCandidate");
                    }}
                    underlayColor="none"
                  >
                    <View
                      style={{
                        display: "flex",
                        marginTop: item.id != 0 ? 20 : 0,
                      }}
                    >
                      <View
                        style={{
                          width: 240,
                          borderWidth: 2,
                          borderColor: "transparent",
                          paddingTop: 24,
                          paddingLeft: 19.84,
                          paddingBottom: 24,
                          paddingRight: 19.84,
                          backgroundColor: "white",
                          borderRadius: 20,
                          display: "flex",
                          justifyContent: "space-between",
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 0,
                            height: 12,
                          },
                          shadowOpacity: 0.1,
                          shadowRadius: 16.0,

                          elevation: 24,
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <View
                            style={{
                              backgroundColor: item.backgroundColor,
                              marginRight: 12,
                              width: 48,
                              height: 48,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 18,
                            }}
                          >
                            <View
                              style={{
                                width: 36,
                                height: 36,
                                borderRadius: 15,
                                backgroundColor: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {renderSVGs({ item })}
                            </View>
                          </View>
                          <Text
                            style={{
                              fontSize: 14,
                              fontFamily: "markpro-light",
                              fontWeight: "500",
                            }}
                          >
                            {item.text}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                </>
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
}
