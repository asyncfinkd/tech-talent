import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export default function RegisterFooter({
  firstStep,
  secondStep,
  thirdStep,
}: any) {
  return (
    <>
      <View
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          backgroundColor: "#fff",
        }}
      >
        <View style={{ height: 5, backgroundColor: "#eff3ff" }}>
          <View
            style={{
              width: firstStep ? "20%" : "40%",
              height: 5,
              backgroundColor: "#18c729",
            }}
          />
        </View>
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <View
            style={{
              paddingTop: 16,
              paddingLeft: 0,
              paddingBottom: 16,
              paddingRight: 0,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "markpro-bold",
                  fontWeight: "700",
                  lineHeight: 20,
                  marginTop: 0,
                  marginLeft: 0,
                  marginBottom: 4,
                  marginRight: 0,
                }}
              >
                {firstStep ? "Tell us who you are" : "Create Your Account"}
              </Text>
              <Text
                style={{
                  opacity: 0.5,
                  fontSize: 14,
                  fontFamily: "markpro-light",
                  lineHeight: 16,
                }}
              >
                {firstStep ? "Select profession" : "Enter Your Credentials"}
              </Text>
            </View>
            <TouchableHighlight>
              <Text>123</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </>
  );
}
